var container = document.getElementById('project-js');

function createProject(path, title) {
  var col = document.createElement('div');
  var link = document.createElement('a');
  var project = document.createElement('div');
  var dt = document.createElement('div');
  var pt = document.createTextNode(title);

  var location = 'projects/' + path + "/index.html";
  var imageL = 'url(/projects/' + path + '/tlo.jpg)'

  col.className = "col-xs-12 col-s-6 col-md-6 col-lg-6 col-xl-6 project-pad";
  project.className = "project";
  dt.className = "project-title";
  $(project).css("background-image", imageL)
  $(project).css("background-size", 'cover')
  $(project).css("background-position", 'center')

  $(link).attr('href', location);

  col.appendChild(link);
  dt.appendChild(pt);
  link.appendChild(project);
  link.appendChild(dt);

  container.appendChild(col);


};

$(document).ready(createProject('giereczka', 'Rock Paper Scissors'));
$(document).ready(createProject('zadanka', 'Exercises(F12 CONSOLE)'));
$(document).ready(createProject('zegar', 'Cool Ass Clock'));
$(document).ready(createProject('kwadraty', 'Squares Game'));
