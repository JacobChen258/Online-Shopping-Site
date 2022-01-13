from django.urls import path
from .views import *
# import main function from view

urlpatterns = [
    path('register',RegisterUserView.as_view()), # assign the url path to main
    path('csrf_cookie',GetCSRFToken.as_view()) ,
    path('login',LoginUserView.as_view()),
    path('logout',LogoutUserView.as_view()),
    path('delete',DeleteAccountView.as_view()),
    path('get_users',GetAllUserView.as_view()),
    path('get_profiles',GetAllProfilesView.as_view()),
    path('get_profile',GetProfileView.as_view()),
    path('update_profile',UpdateProfileView.as_view()),
    path('check_auth',CheckAuthView.as_view())
]