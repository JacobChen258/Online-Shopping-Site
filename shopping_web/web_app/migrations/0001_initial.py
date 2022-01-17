# Generated by Django 4.0 on 2022-01-10 06:28

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import web_app.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('item_id', models.IntegerField(default=web_app.models.generate_itemID, primary_key=True, serialize=False)),
                ('price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('item_name', models.CharField(max_length=30)),
                ('stocks', models.IntegerField(default=0)),
                ('on_promo', models.BooleanField(default=False)),
                ('category', models.IntegerField()),
                ('num_reviews', models.IntegerField(default=0)),
                ('review_path', models.CharField(max_length=30)),
                ('num_rating', models.IntegerField(default=0)),
                ('rating_path', models.CharField(max_length=30)),
                ('url', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('is_seller', models.BooleanField(default=False)),
                ('balance', models.DecimalField(decimal_places=2, default=0, max_digits=20)),
                ('url', models.CharField(max_length=30, null=True, unique=True)),
                ('user_name', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('address', models.CharField(max_length=30)),
                ('user_password', models.CharField(default='', editable=False, max_length=30)),
                ('re_password', models.CharField(default='', editable=False, max_length=30)),
                ('cart_path', models.CharField(max_length=30, null=True, unique=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='auth.user')),
            ],
        ),
        migrations.CreateModel(
            name='PurchaseHistory',
            fields=[
                ('order_id', models.IntegerField(default=web_app.models.generate_orderID, primary_key=True, serialize=False)),
                ('price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('item_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='web_app.items')),
                ('user_name', models.ForeignKey(default='', editable=False, on_delete=django.db.models.deletion.CASCADE, to='web_app.userprofile')),
            ],
        ),
        migrations.AddField(
            model_name='items',
            name='user_name',
            field=models.ForeignKey(default='', editable=False, on_delete=django.db.models.deletion.CASCADE, to='web_app.userprofile'),
        ),
        migrations.CreateModel(
            name='CardInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_id', models.IntegerField()),
                ('first_name', models.CharField(max_length=15)),
                ('last_name', models.CharField(max_length=15)),
                ('card_number', models.CharField(max_length=16, validators=[django.core.validators.RegexValidator(regex='[0-9]{16}')])),
                ('cvv', models.CharField(max_length=3, validators=[django.core.validators.RegexValidator(regex='[0-9]{3}')])),
                ('expire_month', models.IntegerField(validators=[django.core.validators.MaxValueValidator(12), django.core.validators.MinValueValidator(1)])),
                ('expire_day', models.IntegerField(validators=[django.core.validators.MaxValueValidator(31), django.core.validators.MinValueValidator(1)])),
                ('billing_address', models.CharField(max_length=30)),
                ('postal_code', models.CharField(max_length=6, validators=[django.core.validators.RegexValidator(regex='\\D\\d\\D{2}')])),
                ('user_name', models.ForeignKey(default='', editable=False, on_delete=django.db.models.deletion.CASCADE, to='web_app.userprofile')),
            ],
            options={
                'unique_together': {('card_id', 'user_name')},
            },
        ),
    ]