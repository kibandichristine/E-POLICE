# Generated by Django 4.1.3 on 2022-11-29 10:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("precinct", "0002_alter_mostwanted_bounty"),
    ]

    operations = [
        migrations.CreateModel(
            name="MissingPersonImage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="precinct/images")),
                (
                    "missing_person",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="images",
                        to="precinct.missingperson",
                    ),
                ),
            ],
        ),
    ]