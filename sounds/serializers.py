from rest_framework import serializers
from .models import Music


class Musicserializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField()

    class Meta:
        model = Music
        exclude = ('like',)

    def get_likes_count(self, instance):
        return instance.like.count()


class Likeserialiser(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ('like',)
