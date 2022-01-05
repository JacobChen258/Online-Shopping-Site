from rest_framework import serializers
from .models import Users,Items,PurchaseHistory,CardInfo

# Serialize all tables into objects
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        field = ('id','user_id','is_serller','balance','url','email',
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
