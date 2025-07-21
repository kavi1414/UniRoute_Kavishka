from django.urls import path
<<<<<<< HEAD

urlpatterns = []
=======
from . import views

urlpatterns = [
    path('register/student/', views.register_student, name='register_student'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout_user'),  
]
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
