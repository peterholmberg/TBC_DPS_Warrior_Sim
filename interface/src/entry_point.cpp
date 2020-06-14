#include "sim_interface.hpp"

#include <emscripten/bind.h>

using namespace emscripten;

EMSCRIPTEN_BINDINGS(module)
{

    class_<Sim_interface>("Sim_interface")
        .constructor<>()
        .function("simulate", &Sim_interface::simulate);
        .function("simulate_mult", &Sim_interface::simulate_mult);

    register_vector<double>("vector<double>");
    register_vector<int>("vector<int>");
    register_vector<std::vector<double>>("vector<vector<double>>");
    register_vector<std::string>("StringList");

    value_object<Sim_input>("Sim_input")
        .field("race", &Sim_input::race)
        .field("armor", &Sim_input::armor)
        .field("weapons", &Sim_input::weapons)
        .field("buffs", &Sim_input::buffs)
        .field("enchants", &Sim_input::enchants)
        .field("stat_weights", &Sim_input::stat_weights)
        .field("options", &Sim_input::options)
        .field("compare_armor", &Sim_input::compare_armor)
        .field("compare_weapons", &Sim_input::compare_weapons)
        .field("mult_armor", &Sim_input::mult_armor)
        .field("mult_weapons", &Sim_input::mult_weapons)
        .field("target_level", &Sim_input::target_level)
        .field("fight_time", &Sim_input::fight_time)
        .field("n_simulations", &Sim_input::n_simulations)
        .field("n_simulations_stat_weights", &Sim_input::n_simulations_stat_weights)
        .field("sunder_armor", &Sim_input::sunder_armor)
        .field("heroic_strike_rage_thresh", &Sim_input::heroic_strike_rage_thresh)
        .field("cleave_rage_thresh", &Sim_input::cleave_rage_thresh)
        .field("whirlwind_rage_thresh", &Sim_input::whirlwind_rage_thresh)
        .field("whirlwind_bt_cooldown_thresh", &Sim_input::whirlwind_bt_cooldown_thresh)
        .field("hamstring_cd_thresh", &Sim_input::hamstring_cd_thresh)
        .field("hamstring_thresh_dd", &Sim_input::hamstring_thresh_dd)
        .field("initial_rage", &Sim_input::initial_rage);

    value_object<Sim_output>("Sim_output")
        .field("hist_x", &Sim_output::hist_x)
        .field("hist_y", &Sim_output::hist_y)
        .field("dmg_sources", &Sim_output::dmg_sources)
        .field("white_mh", &Sim_output::white_mh)
        .field("white_oh", &Sim_output::white_oh)
        .field("bloodthirst", &Sim_output::bloodthirst)
        .field("execute", &Sim_output::execute)
        .field("heroic_strike", &Sim_output::heroic_strike)
        .field("cleave", &Sim_output::cleave)
        .field("whirlwind", &Sim_output::whirlwind)
        .field("hamstring", &Sim_output::hamstring)
        .field("item_hit_effects", &Sim_output::item_hit_effects)
        .field("aura_uptimes", &Sim_output::aura_uptimes)
        .field("proc_counter", &Sim_output::proc_counter)
        .field("stat_weights", &Sim_output::stat_weights)
        .field("extra_stats", &Sim_output::extra_stats)
        .field("mean_dps", &Sim_output::mean_dps)
        .field("std_dps", &Sim_output::std_dps)
        .field("messages", &Sim_output::messages);
};