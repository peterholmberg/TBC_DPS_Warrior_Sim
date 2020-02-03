#include "Item.hpp"

/**
ITEM
 */
const Stats &Item::get_stats() const
{
    return stats_;
}

Item::Item(Stats stats, Special_stats special_stats) : stats_{stats}, special_stats_{special_stats} {};

const Special_stats &Item::get_special_stats() const
{
    return special_stats_;
}

/**
WEAPON
 */
Weapon::Weapon(double swing_speed, std::pair<double, double> damage_interval, Stats stats, Special_stats special_stats,
               Socket socket)
        : swing_speed_{swing_speed},
          internal_swing_timer_{0},
          damage_interval_{std::move(damage_interval)},
          Item{stats, special_stats},
          socket_{socket} {};

Weapon::Step_result Weapon::step(double time, double attack_power)
{
    internal_swing_timer_ -= time;
    if (internal_swing_timer_ < 0.0)
    {
        internal_swing_timer_ += swing_speed_;

        // TODO random damage?
        double damage = (damage_interval_.second - damage_interval_.first) + attack_power * swing_speed_ / 14;
        if (socket_ == Weapon::Socket::off_hand)
        {
            damage *= 0.625;
        }
        return {damage, true};
    }
    return {0.0, false};
}

Weapon::Socket Weapon::get_socket() const
{
    return socket_;
}

/**
ARMOR
 */
Armor::Armor(Stats stats, Special_stats special_stats, Socket socket) : Item{stats, special_stats},
                                                                        socket_{socket} {}

Armor::Socket Armor::get_socket() const
{
    return socket_;
}

/**
BUFFS
 */
Buff::Buff(Stats stats, Special_stats special_stats, Buff::Socket socket) : Item{stats, special_stats},
                                                                            socket_{socket} {}