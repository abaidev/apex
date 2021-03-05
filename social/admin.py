from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['tin', 'fullname', 'phone_number', 'address']
    search_fields = ['tin', 'fullname']