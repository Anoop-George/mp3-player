# Generated by Django 2.2 on 2020-06-04 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=223, null=True, verbose_name='email'),
        ),
    ]
