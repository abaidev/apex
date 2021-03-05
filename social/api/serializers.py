from rest_framework import serializers
from social.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='social-api:profile-rud')

    class Meta:
        fields = '__all__'
        model = Profile
