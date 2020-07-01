from django.urls import path,include
from .views import MusicList,SongLikeAPIView,MusicListfull,LikedSongs

urlpatterns = [
    path('songs/<str:genre>/',MusicList.as_view(),name='music-genre'),
    path('songs/<int:pk>/like',SongLikeAPIView.as_view(),name='music-like'),
    path('songs/',MusicListfull.as_view(),name='music-list'),
    path('likedsongs/',LikedSongs.as_view(),name='music-likedlist')
]