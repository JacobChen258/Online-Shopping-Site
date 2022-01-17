from django.contrib import auth
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from .models import UserProfile,Items,CardInfo,PurchaseHistory
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.views.decorators.csrf import ensure_csrf_cookie,csrf_protect
from django.utils.decorators import method_decorator
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,logout

# APIview (generic view)
# Response, send custom response from our view
# status, give us access to HTTP status code

# Create your views here.
# A view set up to return to us all data objects
# Use the serializers is the waay to return the object
class UsersView(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class =UsersSerializer

class ItemsView(generics.ListAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer
    
class CardInfoView(generics.ListAPIView):
    queryset = CardInfo.objects.all()
    serializer_class = CardInfoSerializer

class PurchaseHistoryView(generics.ListAPIView):
    queryset = PurchaseHistory.objects.all()
    serializer_class = PurchaseHistorySerializer

@method_decorator(csrf_protect,name="dispatch")
class CheckAuthView(APIView):
    def get(self,request,format=None):
        if User.is_authenticated:
            return Response({"isAuthenticated":"success"})
        else:
            return Response({"isAutheticated":"fail"})

# APIView allow us to overwrite some default methods
@method_decorator(csrf_protect,name="dispatch")
class RegisterUserView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self,request,format=None):
        username = request.data.get("username")
        address = request.data.get("address")
        password = request.data.get("password")
        re_password = request.data.get("re_password")
        if password == re_password:
            if UserProfile.objects.filter(username = username).exists():
                return Response({'error':"Username is already been created"})
            user = User.objects.create_user(username = username,password=password)
            user.save()
            user = User.objects.get(username=username)
            user_profile = UserProfile(user.id,username=username,address=address)
            user_profile.save()
            headers = {
                'Access-Control-Allow-Credentials':'true',
            }   
            return Response({"success":"User created successfully"},headers=headers)
        else:
            return Response({"error":"Password does not match"})

@method_decorator(csrf_protect,name="dispatch")
class LoginUserView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self,request,format=None):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            headers = {
                'Access-Control-Allow-Credentials':'true',
            }
            return Response({"success":"Logged in succesfully", "username":username},headers=headers)
        else:
            return Response({"error":"Error in login info"})

class LogoutUserView(APIView):
    def post(self,request,format=None):
        try:
            logout(request)
            headers = {
                'Access-Control-Allow-Credentials':'true',
            }
            return Response({"success":"Logged out successfully"},headers=headers)
        except:
            return Response({"error":"Error happened"})

class DeleteAccountView(APIView):
    def delete(self,request,format=None):
        user = self.request.user
        try:
            user = User.objects.filter(id=user.id).delete()
            headers = {
                'Access-Control-Allow-Credentials':'true',
            }
            return Response({"success":"Delete user successfully"},headers = headers)
        except:
            return Response({"error":"Delete user failed"})


class GetAllUserView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self,request,format=None):
        users = User.objects.all()
        users = UsersSerializer(users,many=True)
        return Response(users.data)

class GetAllProfilesView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self,request,format=None):
        profiles = UserProfile.objects.all()
        profiles = UserProfileSerializer(profiles,many=True)
        return Response(profiles.data)

class GetProfileView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = UserProfileSerializer;
    def get(self,request,format=None):
        user = self.request.user
        user_profile = UserProfile.objects.get(user=user.id)
        user_profile = self.serializer_class(user_profile)
        name = user.get_full_name()
        headers = {
            'Access-Control-Allow-Credentials':'true',
        }
        return Response({'profile':user_profile.data,'name':name,'username':str(user.username)},headers=headers)

class UpdateProfileView(APIView):
    def post(self,request,format=None):
        user = self.request.user
        username = user.username
        data = self.request.data
        first_name = data['first_name']
        last_name = data['last_name']
        address = data['address']

        User.objects.filter(id=user.id).update(first_name=first_name,last_name=last_name)
        UserProfile.objects.filter(user=user.id).update(address=address)
        user_profile = UserProfile.objects.get(user=user.id)
        user_profile = UserProfileSerializer(user_profile)
        name = user.get_full_name()
        headers = {
            'Access-Control-Allow-Credentials':'true',
        }
        return Response({"profile":user_profile.data,"name":name,"username":str(username)},headers = headers)



@method_decorator(ensure_csrf_cookie,name="dispatch")
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self,request,format=None):
        headers = {
            'Access-Control-Allow-Credentials':'true',
        }
        return Response({"sucess":"CSRF cookie set"},headers=headers)