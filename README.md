# JavaScript Homework - JavaScript and DOM Manipulation

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

## Your Task
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

      <div class="row margin-top-50">
              <div class="col-md-4">
                    <aside class="filters">
                            <div class="panel panel-default">
                                <div class="panel-heading">Filter Search By Category</div>
                                  <div class="panel-body">

                                          <form>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                          <select type="button" class="form-control btn btn-success" data-toggle="dropdown">
                                                              <option href="#" class="dropdown-item">Date</option>
                                                              <option href="#" class="dropdown-item">City</option>
                                                              <option href="#" class="dropdown-item">State</option>
                                                              <option href="#" class="dropdown-item">Country</option>
                                                              <option href="#" class="dropdown-item">Shape</option>
                                                          </select>
                                                    </div>
                                                          <input type="text" id="input" class="form-control" placeholder="enter here">
                                                </div>
                                          </form>

                                        <button id="filter-btn" type="button" class="btn btn-default">Filter Table</button>

                                  </div>
                            </div>
                      </aside>

                  </div>

        <div class="row margin-top-50">
        <div class="col-md-10">
    </br>
                <div id="table-area" class="">
                        <table id="ufo-table" class="table table-striped">
                                <thead>
                                        <tr>
                                                <th class="table-head">Date</th>
                                                <th class="table-head">City</th>
                                                <th class="table-head">State</th>
                                                <th class="table-head">Country</th>
                                                <th class="table-head">Shape</th>
                                                <th class="table-head">Duration</th>
                                                <th class="table-head">Comments</th>
                                        </tr>
                                </thead>
                                <tbody></tbody>
                        </table>
                </div>
        </div>
        </div>

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
### Before You Begin

1. Create a new repository for this project called `javascript-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Javascript challenge. Use the folder names to correspond to the challenges: **UFO-level-1** and **UFO-level-2**.

4. Add your **html** files to this folder as well as your static folder containing your javascript. This will be the main script to run for analysis.

5. Push the above changes to GitHub or GitLab.

### Level 1: Automatic Table and Date Search (Required)

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -

**Good luck!**

- - -

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
