from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^', 'app.front.views.home', name='home'),
    url(r'^$', 'django_components.front.views.index', name='index'),
    url(r'^inicio$', 'django_components.front.views.index', name='index'),
    url(r'^nosotros$', 'django_components.front.views.index', name='index'),
    url(r'^nosotros$', 'django_components.front.views.index', name='index'),
        url(r'^nosotros/quienes-somos$', 'django_components.front.views.index', name='index'),
        url(r'^nosotros/nuestro-equipo$', 'django_components.front.views.index', name='index'),
    url(r'^que-hacemos$', 'django_components.front.views.index', name='index'),
        url(r'^que-hacemos/litigio-civil$', 'django_components.front.views.index', name='index'),
        url(r'^que-hacemos/derecho-fronterizo$', 'django_components.front.views.index', name='index'),
        url(r'^que-hacemos/campo-accion$', 'django_components.front.views.index', name='index'),
    url(r'^contacto$', 'django_components.front.views.index', name='index'),
    url(r'^terminos-condiciones$', 'django_components.front.views.index', name='index'),

    url(r'^home$', 'django_components.front.views.index', name='index'),
    url(r'^about-us$', 'django_components.front.views.index', name='index'),
        url(r'^about-us/who-we-are$', 'django_components.front.views.index', name='index'),
        url(r'^about-us/our-team$', 'django_components.front.views.index', name='index'),
    url(r'^what-we-do$', 'django_components.front.views.index', name='index'),
        url(r'^what-we-do/civil-litigation$', 'django_components.front.views.index', name='index'),
        url(r'^what-we-do/cross-border-law$', 'django_components.front.views.index', name='index'),
        url(r'^what-we-do/field-action$', 'django_components.front.views.index', name='index'),

    url(r'^contact$', 'django_components.front.views.index', name='index'),
    url(r'^terms-conditions$', 'django_components.front.views.index', name='index'),

    url(r'^partial/layout/', include('django_components.front.urls')),
    url(r'^partial/section/', include('django_components.front.urls')),
    url(r'^partial/block/', include('django_components.front.urls')),

    url(r'.well-known/acme-challenge', 'django_components.front.views.challenge', name='challenge'),

    # url(r'^admin/', include(admin.site.urls)),
)
