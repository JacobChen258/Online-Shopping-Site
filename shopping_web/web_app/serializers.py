from rest_framework import serializers
from .models import Users,Items,PurchaseHistory,CardInfo

# Serialize all tables into objects
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        field = ('id','user_id','is_serller','balance','url','user_name',
            'address','user_password','cart_path')

class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        field = ('id','item_id','price','item_name','user_id','stocks',
            'on_promo','category','num_reviews','review_path','num_rating',
            'rating_path','url')

class PurchaseHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseHistory
        field = ('id','order_id','user_id','item_id','price')

class CardInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardInfo
        field = ('id','card_id','user_id','first_name','last_name','card_number',
            'cvv','expire_month','expire_day','billing_address','postal_code')

# Send an post request to the endpoint
# Post request is sent when we are creating something new
#   Basically it can be viewed as the data frontend sent to backend server
# We send a payload that has information (pockets)
# This serializer makes sure that the data been sent to our post request is valid
# and it fits the corresponding field we need to create a view
class RegisterUserPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        # The field here contains the data we want it to be sent as part of the request
        field = ('user_name','address','user_password')