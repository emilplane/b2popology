When representing the stats of a tower in Battles 2, BTD6, or even older games, the community has typically gone with
one of two methods:
- Showing what a certain tower upgrade does to a tower (the "upgrade" view):


    xx3 Tack Shooter
    - tacks attack buffed
      - +4j (16j), 75%s (1.05s)


- Showing the finished product with all intended upgrades (the "tower" view):


    103 Tack Shooter
    - tacks attack:
      - 1d, 16j 360° spread, 1p, 0.7875s, sharp type


These two views have their own advantages and disadvantages. The upgrade view makes it easy to see how an upgrade is
altering a tower, but the tower view shows the full picture, with all the upgrade applied, all of the stats in one
place, and all of the math done. The upgrade view in most implementations actually cheats a little: the "summarizations"
for each stat (like "(16j)") require for the math for that stat to be done already, which is what the tower view is for.
This is an important detail when trying to move from explicitly typing out all of the stats for people to see on a
Reddit post or in HTML to creating a dynamic system.

### What is a module?

In short, a module is a part of a tower, which most people think of as an "attack". For example, in the following
example, there are two modules: one called "dart" and one called "grape":

    010 Monkey Buccaneer
    - dart attack
      - 1d, 4p, 60r, 1.0s, sharp type
    - grape attack
      - 1d, 5j 80° spread, 1p, 1.3s, sharp type
      - this attack is duplicated in both directions

Why don't we just call them "attacks"? Because the terminology would become confusing: there are other types of modules:
- `- $300 end of round income` should be an "income" module
- `on contact: explosion: 1d, 14p...` (where the module is called "explosion") should be called a "projectile" or
"subattack" so that it isn't ambiguous which modules are attacks and which ones do nothing
by themselves unless referred to by another module

Tying back into the upgrade/tower view idea, modules can come in two forms: tower modules and upgrade modules. Tower
module instances start completely empty, with just the name and type of module:

    - name: dart
    - type: attack

To give this *dart* attack tower module stats, we add upgrade modules to it. This includes base towers!

    - name: dart
    - type: attack
    - upgrade_modules: [
      Upgrade module: 1d, 2p, 32r, 0.95s, sharp type
    ]

If a 210 Dart Monkey is what we want, those upgrade modules are added:

    - name: dart
    - type: attack
    - upgrade_modules: [
      Upgrade module: 1d, 2p, 32r, 0.95s, sharp type
      Upgrade module: +1p
      Upgrade module: +3p
      Upgrade module: 85%s
    ]

Now, if we want the tower view of this module, we can call a method on this module to get our stats:

    210 Dart Monkey
    - dart attack:
      - 1d, 6p, 32r, 0.8075s, sharp type

One of the reasons why this method is necessary is because of the order of how these stats are calculated:
multiplicative (85%s) first, then percentage (+40%p), then additive (+8). If these calculations were just performed, in
upgrade order, on a "base" stat, we would end up with an incorrect result.

Note: the exact syntax used in this document is for illustration purposes only, and may be missing a couple details. The
important bits are there for the topic being discussed.