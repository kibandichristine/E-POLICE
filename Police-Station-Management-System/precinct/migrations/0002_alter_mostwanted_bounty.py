# Generated by Django 4.1.3 on 2022-11-29 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("precinct", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="mostwanted",
            name="bounty",
            field=models.DecimalField(decimal_places=2, max_digits=9),
        ),
    ]