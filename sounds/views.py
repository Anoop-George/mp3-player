from django.shortcuts import render
from .models import Music
from .serializers import Musicserializer,Likeserialiser
from rest_framework.views import APIView
from rest_framework import generics, status, viewsets,permissions
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework.parsers import FileUploadParser


class MusicList(APIView):
    parser_classes = (FileUploadParser,)

    def get(self, request, *args, **kwargs):
        genre = self.kwargs.get('genre')
        songs = Music.objects.filter(genre=genre)
        serializer = Musicserializer(songs, many=True,context={'request': request})
        return Response(serializer.data)

class MusicListfull(APIView):

    def get(self, request, *args, **kwargs):
        
        songs = Music.objects.all()
        serializer = Musicserializer(songs, many=True,context={'request': request})
        return Response(serializer.data)

    
class SongLikeAPIView(APIView):
    serializer_class = Likeserialiser
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, pk):
        music = get_object_or_404(Music, pk=pk)
        user = request.user

        music.like.remove(user)
        music.save()

        serializer_context = {"request": request}
        serializer = self.serializer_class(music, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk):
        music = get_object_or_404(Music, pk=pk)
        user = request.user

        music.like.add(user)
        music.save()

        serializer_context = {"request": request}
        serializer = self.serializer_class(music, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)


class LikedSongs(APIView):
    def get(self,request,*args,**kwargs):
        user = request.user
        musics = Music.objects.filter(like=user)
        serializer = Musicserializer(musics, many=True)
        return Response(serializer.data)