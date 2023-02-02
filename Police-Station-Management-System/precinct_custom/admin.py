from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from precinct.admin import ComplainantAdmin
from precinct.models import Complainant
from tags.models import TaggedItem


class TagInline(GenericTabularInline):
    model = TaggedItem
    autocomplete_fields = ['tag']
    extra = 0


class CustomComplainantAdmin(ComplainantAdmin):
    inlines = [TagInline]


admin.site.unregister(Complainant)
admin.site.register(Complainant, CustomComplainantAdmin)
