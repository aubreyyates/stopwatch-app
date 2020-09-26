stopwatch_app_fws_object.total_num_breaks = 0;


stopwatch_app_fws_object.total_break_stat = document.getElementById("stopwatch-app-stats-total-break-stat");
stopwatch_app_fws_object.total_break_time_stat = document.getElementById("stopwatch-app-stats-total-break-time-stat");
stopwatch_app_fws_object.average_break_time_stat = document.getElementById("stopwatch-app-stats-average-break-time-stat");

function increase_break_stat() {
    stopwatch_app_fws_object.total_num_breaks += 1;
    stopwatch_app_fws_object.total_break_stat.textContent = stopwatch_app_fws_object.total_num_breaks;
}

function reset_stats() {
    stopwatch_app_fws_object.total_num_breaks = 0;
    stopwatch_app_fws_object.total_break_stat.textContent = stopwatch_app_fws_object.total_num_breaks;
    stopwatch_app_fws_object.total_break_time_stat.innerHTML = "00:00:00";
    stopwatch_app_fws_object.average_break_time_stat.innerHTML = "00:00:00";
}

function update_stat_timers() {

    let break_time_mill = moment().format("x") - stopwatch_app_fws_object.start_time.format("x") - stopwatch_app_fws_object.total_time_mil;
    let break_time = moment.duration(break_time_mill);
    stopwatch_app_fws_object.total_break_time_stat.innerHTML = break_time.format("HH:mm:ss");

    let average_break_time_mill = Math.floor(break_time_mill / stopwatch_app_fws_object.total_num_breaks);
    let average_break_time = moment.duration(average_break_time_mill);
    stopwatch_app_fws_object.average_break_time_stat.innerHTML = average_break_time.format("HH:mm:ss");

}