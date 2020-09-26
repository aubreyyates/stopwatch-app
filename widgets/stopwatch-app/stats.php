<link rel="stylesheet" href="css/stopwatch-app/stats.css">

<div id='stopwatch-app-stats'>

    <div id='stopwatch-app-stats-main-heading'>
        <div id='stopwatch-app-stats-heading-centered'>
            <div id='stopwatch-app-stats-stats-icon-image-container'>
                <img src="images/stopwatch-app/stats-icon.png" id='stopwatch-app-stats-stats-icon-image'>
            </div>

            <div id='stopwatch-app-stats-heading-container'>
                <h3 id='stopwatch-app-stats-heading'>Stats</h3>
            </div>
        </div>
    </div>

    <div class='stopwatch-app-stats-individual-stat-container'>
        <div class='stopwatch-app-stats-words'>
            <p>Number of pauses:</p>
        </div>
        <div class='stopwatch-app-stats-words-stat'>
            <p id='stopwatch-app-stats-total-break-stat'>0</p>
        </div>
    </div>

    <div class='stopwatch-app-stats-individual-stat-container'>
        <div class='stopwatch-app-stats-words'>
            <p>Total time paused:</p>
        </div>
        <div class='stopwatch-app-stats-words-stat'>
            <p id='stopwatch-app-stats-total-break-time-stat'>00:00:00</p>
        </div>
    </div>


    <div class='stopwatch-app-stats-individual-stat-container'>
        <div class='stopwatch-app-stats-words'>
            <p>Average pause duration:</p>
        </div>
        <div class='stopwatch-app-stats-words-stat'>
            <p id='stopwatch-app-stats-average-break-time-stat'>00:00:00</p>
        </div>
    </div>

</div>

<script src='js/stopwatch-app/stats.js'></script>