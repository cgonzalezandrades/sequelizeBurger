'use strict';
module.exports = function (sequelize, DataTypes) {

    var burgers1 = sequelize.define('burgers1', {
            burger_name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }

        },

        {
            freezeTableName: true

            //this disables  the timestamps in the table.
            // timestamps: false
        },

        {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });

    return burgers1;
};