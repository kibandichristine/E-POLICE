from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('officers', views.OfficerViewSet)
router.register('complaints', views.ComplaintViewSet)
router.register('complainants', views.ComplainantViewSet)
router.register('suspects', views.SuspectViewSet)
router.register('detectives', views.DetectiveViewSet)
router.register('lawyers', views.LawyerViewSet)
router.register('missing-persons', views.MissingPersonViewSet)
router.register('most-wanted', views.MostWantedViewSet)
router.register('bounty-hunters', views.BountyHunterViewSet)
router.register('addresses', views.AddressViewSet)
router.register('last-seen', views.LastSeenViewSet)
router.register('shifts', views.ShiftViewSet)

# missing persons
missing_persons_router = routers.NestedDefaultRouter(
    router, 'missing-persons', lookup='missing_person')
missing_persons_router.register(
    'images', views.MissingPersonImageViewSet, basename='missing-persons-images')

# most wanted persons
most_wanted_person_router = routers.NestedDefaultRouter(
    router, 'most-wanted', lookup='most_wanted_person'
)
most_wanted_person_router.register(
    'images', views.MostWantedImageViewSet, basename='most-wanted-person-images')

urlpatterns = router.urls \
    + missing_persons_router.urls \
    + most_wanted_person_router.urls
