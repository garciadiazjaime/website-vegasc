from fabric.api import local

def deploy():
  local('git rev-parse HEAD > SHA1.txt')
  local('docker build -t garciadiazjaime/website-vega .')
  local('docker push garciadiazjaime/website-vega')
  local('echo "docker pull garciadiazjaime/website-vega"')
