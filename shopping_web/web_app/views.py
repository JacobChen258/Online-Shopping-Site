from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, serializers
from .serializers import UsersSerializer,ItemsSerializer,PurchaseHistorySerializer,CardInfoSerializer
from .models import Users,Items,CardInfo,PurchaseHistory

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

def main(request):
    return HttpResponse("Hello")