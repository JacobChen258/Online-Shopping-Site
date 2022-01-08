from enum import unique
from django.db import models
from django.db.models.deletion import CASCADE, SET_NULL
from django.core.validators import MaxValueValidator, MinValueValidator, RegexValidator
import random as rand

def generate_userID():
    max_val = 1 << 10
    new_id = rand.randint(0,max_val)
    unique = (Users.objects.filters(user_id=new_id).count() == 0)
    while (not unique):
        new_id = rand.randint(0,max_val)
        unique = (Users.objects.filters(user_id=new_id).count() == 0)
    return max_val

def generate_itemID():
    max_val = 1 << 15
    new_id = rand.randint(0,max_val)
    unique = (Items.objects.filters(item_id=new_id).count() == 0)
    while (not unique):
        new_id = rand.randint(0,max_val)
        unique = (Users.objects.filters(item_id=new_id).count() == 0)
    return max_val  

def generate_orderID():
    max_val = 1 << 20
    new_id = rand.randint(0,max_val)
    unique = (PurchaseHistory.objects.filters(order_id=new_id).count() == 0)
    while (not unique):
        new_id = rand.randint(0,max_val)
        unique = (PurchaseHistory.objects.filters(order_id=new_id).count() == 0)
    return max_val 

# Create your models here.
class Users(models.Model):
    user_id  = models.IntegerField(primary_key=True,default=generate_userID)
    is_seller = models.BooleanField(null=False,default=False)
    balance = models.DecimalField(max_digits=20,decimal_places=2,default=0,null=False)
    # RIGHT NOW URL CAN BE NULL
    # LATER WILL BE CHANGED TO NOT NULL
    url = models.CharField(max_length=30,null= True,unique=True)
    user_name = models.CharField(max_length=30,null = False,unique=True)
    address = models.CharField(max_length = 30)
    user_password = models.CharField(max_length=30,null=False)
    cart_path = models.CharField(max_length=30,null=True,unique=True)

class Items(models.Model):
    item_id  = models.IntegerField(primary_key=True,default=generate_itemID)
    price  = models.DecimalField(decimal_places=2,max_digits=20,null=False)
    item_name = models.CharField(max_length=30,null=False)
    user_id  = models.ForeignKey("Users", on_delete=models.CASCADE)
    stocks  = models.IntegerField(default = 0,null=False)
    on_promo  = models.BooleanField(default = False,null=False)
    category  = models.IntegerField(null=False)
    num_reviews  = models.IntegerField(default=0,null=False)
    review_path  = models.CharField(max_length=30,null=False)
    num_rating  = models.IntegerField(default=0,null=False)
    rating_path  = models.CharField(max_length=30,null=False)
    # RIGHT NOW URL CAN BE NULL
    # LATER WILL BE CHANGED TO NOT NULL
    url  = models.CharField(max_length=30,null=True)

class PurchaseHistory(models.Model):
    order_id = models.IntegerField(primary_key=True,default=generate_orderID)
    user_id  = models.ForeignKey("Users",on_delete=CASCADE)
    item_id  = models.ForeignKey("Items",on_delete=SET_NULL,null=True)
    price  = models.DecimalField(decimal_places=2,null=False,max_digits=20)

class CardInfo(models.Model):
    card_id = models.IntegerField(null = False)
    user_id = models.ForeignKey("Users",on_delete=CASCADE)
    class Meta:
        unique_together = (("card_id","user_id"),)
    first_name = models.CharField(max_length=15,null=False)
    last_name = models.CharField(max_length=15,null=False)
    card_number = models.CharField(validators=[RegexValidator(regex='[0-9]{16}')],null=False,max_length=16)
    cvv = models.CharField(validators=[RegexValidator(regex='[0-9]{3}')],null=False,max_length=3)
    expire_month = models.IntegerField(validators=[MaxValueValidator(12),MinValueValidator(1)],null=False)
    expire_day = models.IntegerField(validators=[MaxValueValidator(31),MinValueValidator(1)],null=False)
    billing_address = models.CharField(max_length=30,null=False)
    postal_code = models.CharField(validators=[RegexValidator(regex='\D\d\D{2}')],max_length=6)