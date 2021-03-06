import Sequelize, { Model } from 'sequelize';

class Meetup extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                description: Sequelize.STRING,
                location: Sequelize.STRING,
                date: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'planner_id',
            as: 'planner',
        });
        this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'banner' });
        this.belongsToMany(models.User, {
            through: 'meetups_users',
            as: 'users',
            foreignKey: 'user_id',
        });
    }
}

export default Meetup;
