# JavaScript and DOM Manipulation

 We will use JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>UFO Finder</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link rel="stylesheet" href="static/css/style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>

<body>



<div class="wrapper">
          <nav class="navbar navbar-default">
                <div class="container-fluid">
                      <div class="navbar-header">
                          <a class="navbar-brand" href="index.html">UFO Sightings
                              <img class="nav-ufo" src="static/images/ufo.svg">
                          </a>
                      </div>
                </div>
          </nav>

          <div class="hero text-center">
                <h1>UFO Sightings</h1>
                <p>The Truth is Out There</p>
          </div>

  <div class="container">
  <footer class="footer">
      <span class="bottom">UFO Sightings</span>
  </footer>

        </div>
</div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
  <script src="static/js/data.js"></script>
  <script src="static/js/app.js"></script>

</body>

</html>


### Level 1: Automatic Table and Date Search 
* Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories 

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)


