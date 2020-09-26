stopwatch_app_fws_object = {};


// Configure the app ----------
stopwatch_app_fws_object.clockin_btn_color = "#75fc75"
stopwatch_app_fws_object.clockin_btn_text = "Start"

stopwatch_app_fws_object.clockout_btn_color = "#dc4a4a"
stopwatch_app_fws_object.clockout_btn_text = "Reset"

stopwatch_app_fws_object.breakbtn_color = "#e6ac23"
stopwatch_app_fws_object.breakbtn_text = "Pause"

stopwatch_app_fws_object.disabled_btn_color = "#423d3d"
stopwatch_app_fws_object.resume_text = "Resume"


// Main Code
stopwatch_app_fws_object.clockin_btn = document.getElementById("stopwatch-app-stopwatch-clockin");
stopwatch_app_fws_object.clockout_btn = document.getElementById("stopwatch-app-stopwatch-clockout");
stopwatch_app_fws_object.breakbtn = document.getElementById("stopwatch-app-stopwatch-breakbtn");
stopwatch_app_fws_object.user_clock = document.getElementById("stopwatch-app-stopwatch-user-clock");

stopwatch_app_fws_object.clockin_btn.textContent = stopwatch_app_fws_object.clockin_btn_text
stopwatch_app_fws_object.clockout_btn.textContent = stopwatch_app_fws_object.clockout_btn_text
stopwatch_app_fws_object.breakbtn.textContent = stopwatch_app_fws_object.breakbtn_text





// Holds to the start time when clockin was first pushed
stopwatch_app_fws_object.start_time = 0;

stopwatch_app_fws_object.last_resumed_time = 0;

// Clocked in set to false
stopwatch_app_fws_object.clocked_in = false;
// On break set to false
stopwatch_app_fws_object.on_break = false;

stopwatch_app_fws_object.total_time_mil = 0;



// Start the clock button pushed
stopwatch_app_fws_object.clockin_btn.addEventListener('click', function () {

    if (stopwatch_app_fws_object.on_break == false) {

        stopwatch_app_fws_object.clocked_in = true;
        stopwatch_app_fws_object.start_time = moment();
        stopwatch_app_fws_object.last_resumed_time = moment();
        stopwatch_app_fws_object.clockin_btn.textContent = stopwatch_app_fws_object.clockin_btn_text

    } else {

        stopwatch_app_fws_object.last_resumed_time = moment().subtract(stopwatch_app_fws_object.total_time_mil, 'ms');

        stopwatch_app_fws_object.on_break = false
        stopwatch_app_fws_object.clocked_in = true;

    }

    stopwatch_app_fws_object.clockin_btn.textContent = stopwatch_app_fws_object.clockin_btn_text;

    disable_clock_in_button();
    enable_break_button();
    enable_clock_out_button();




}, false);

// Reset the clock button pushed
stopwatch_app_fws_object.clockout_btn.addEventListener('click', function () {

    stopwatch_app_fws_object.clocked_in = false;
    stopwatch_app_fws_object.user_clock.innerHTML = "00:00:00";

    stopwatch_app_fws_object.total_time_mil = 0;

    disable_clock_out_button();
    disable_break_button();
    enable_clock_in_button();

    // Extra functions for other widgets
    reset_stats();

}, false);

// Pause/break the clock button pushed
stopwatch_app_fws_object.breakbtn.addEventListener('click', function () {

    stopwatch_app_fws_object.clocked_in = false;
    stopwatch_app_fws_object.on_break = true;
    stopwatch_app_fws_object.clockin_btn.textContent = stopwatch_app_fws_object.resume_text;

    disable_clock_out_button();
    disable_break_button();
    enable_clock_in_button();

    // Extra functions for other widgets
    increase_break_stat();

}, false);

function disable_clock_in_button() {

    // Disables the clockin button
    stopwatch_app_fws_object.clockin_btn.disabled = true;
    // Changes color of the clockin button
    stopwatch_app_fws_object.clockin_btn.style.backgroundColor = stopwatch_app_fws_object.disabled_btn_color;

}

function disable_clock_out_button() {
    // Disables the clockout button
    stopwatch_app_fws_object.clockout_btn.disabled = true;
    // Changes color of the clockout button
    stopwatch_app_fws_object.clockout_btn.style.backgroundColor = stopwatch_app_fws_object.disabled_btn_color;
}

function disable_break_button() {
    // Disables the break button
    stopwatch_app_fws_object.breakbtn.disabled = true;
    // Changes color of the break button
    stopwatch_app_fws_object.breakbtn.style.backgroundColor = stopwatch_app_fws_object.disabled_btn_color;
}

function enable_clock_in_button() {
    // sets a 1 second delay to enable to clockin button
    setTimeout(function () { stopwatch_app_fws_object.clockin_btn.disabled = false; }, 1000);
    // Changes color of the clockin button
    stopwatch_app_fws_object.clockin_btn.style.backgroundColor = stopwatch_app_fws_object.clockin_btn_color;

}

function enable_clock_out_button() {
    // sets a 1 second delay to enable to clockout button
    setTimeout(function () { stopwatch_app_fws_object.clockout_btn.disabled = false; }, 1000);
    // Changes color of the clockout button
    stopwatch_app_fws_object.clockout_btn.style.backgroundColor = stopwatch_app_fws_object.clockout_btn_color;
}

function enable_break_button() {
    // sets a 1 second delay to enable to break button
    setTimeout(function () { stopwatch_app_fws_object.breakbtn.disabled = false; }, 1000);
    // Changes color of the break button
    stopwatch_app_fws_object.breakbtn.style.backgroundColor = stopwatch_app_fws_object.breakbtn_color;
}

//Start the continuous clock at the top of the page
setInterval(function () { continuous_clock(); }, 100);

function continuous_clock() {

    // Check if the user is clocked.
    if (stopwatch_app_fws_object.clocked_in == true) {

        clocked_timer();

    } else if (stopwatch_app_fws_object.on_break == true) {

        update_stat_timers();

    }

}

// Update the clock
function clocked_timer() {

    let current_time = moment();
    stopwatch_app_fws_object.user_clock.innerHTML = moment.duration(current_time.diff(stopwatch_app_fws_object.last_resumed_time)).format("HH:mm:ss");
    stopwatch_app_fws_object.total_time_mil = moment.duration(current_time.diff(stopwatch_app_fws_object.last_resumed_time)).as('milliseconds');

}

