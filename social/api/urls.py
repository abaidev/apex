from .views import ProfileListCreateAPIView, ProfileRUDAPIView
from django.urls import path

app_name = 'social-api'

urlpatterns = [
    path('profile/', ProfileListCreateAPIView.as_view(), name='profile-list-create'),
    path('profile/<int:pk>/', ProfileRUDAPIView.as_view(), name='profile-rud'),
]