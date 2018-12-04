module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        // Giving the Author model a name of type STRING
        name: DataTypes.STRING
    });

    // Customer.associate = function (models) {
    //     Customer.hasMany(models.Burger);
    // };

    return Customer;
};
