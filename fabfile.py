from fabric.api import local

def deploy():
    #local("./project/manage.py check")
    local('git checkout production')
    local('git pull origin develop')
    local("cp -r ./website/assets/. ./wsgi/myproject/assets")
    local("cp -r ./django_components/front/. ./wsgi/myproject/front")
    local("cp -r ./website/template/. ./wsgi/myproject/template")
    local('git push openshift HEAD:master')

def build():
    local('git add .')
    local('git commit -m "build"')
    local('git push openshift HEAD:master')

def push():
    local('git add .')
    local('git commit -m "build"')
    local('git push')
