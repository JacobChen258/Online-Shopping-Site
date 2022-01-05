from django.urls import path
from .views import main,UsersView, ItemsView, PurchaseHistoryView,CardInfoView
# import main function from view

urlpatterns = [
    path('',main) # assign the url path to main
]
