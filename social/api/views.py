from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from social.models import Profile
from .serializers import ProfileSerializer


class ProfileListCreateAPIView(ListCreateAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    # def create(self, request, *args, **kwargs):
    #     data = request.data
    #     serializer = self.serializer_class(data)
    #     if serializer.is_valid(raise_exception=True):
    #         data.update({"status": True})
    #         serializer.save()
    #         return Response(data, status=HTTP_200_OK)

        # return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)



class ProfileRUDAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
