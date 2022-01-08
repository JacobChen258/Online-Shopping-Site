# Generated by Django 4.0 on 2022-01-05 18:05

from django.db import migrations, models
import web_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('web_app', '0002_rename_purchase_history_purchasehistory_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='item_id',
            field=models.IntegerField(default=web_app.models.generate_itemID, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='items',
            name='url',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='purchasehistory',
            name='order_id',
            field=models.IntegerField(default=web_app.models.generate_orderID, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='users',
            name='cart_path',
            field=models.CharField(max_length=30, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='users',
            name='email',
            field=models.CharField(max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='users',
            name='url',
            field=models.CharField(max_length=30, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='users',
            name='user_id',
            field=models.IntegerField(default=web_app.models.generate_userID, primary_key=True, serialize=False),
        ),
    ]
