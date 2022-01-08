from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import *
from .models import Users,Items,CardInfo,PurchaseHistory
from rest_framework.views import APIView
from rest_framework.response import Response
# APIview (generic view)
# Response, send custom response from our view
# status, give us access to HTTP status code

# Create your views here.
# A view set up to return to us all data objects
# Use the serializers is the waay to return the object
class UsersView(generics.ListAPIView):
    queryset = Users.objects.all()
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

# APIView allow us to overwrite some default methods
class RegisterUserView(APIView):
    serializer_class = RegisterUserPostSerializer

    def post(self,request,format=None):
        if not self.request.sesssion.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get("user_name")
            address = serializer.data.get("address")
            user_password = serializer.data.get("user_password")
            user = Users(email=email,address=address,user_password=user_password)
            user.save()
        return Response(UsersSerializer(user).data,status=status.HTTP_201_CREATED)
        
def main(request):
    return HttpResponse("Hello")