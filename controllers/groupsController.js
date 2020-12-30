const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');

const groupsModel = jsonTable('groups');

module.exports = {
    index: (req, res) => {

        let groups = groupsModel.all()

        res.render('groups/index',  { groups });
    },
    create: (req, res) => {
        res.render('groups/create');
    },
    store: (req, res) => {

        let group = req.body;

        groupId = groupsModel.create(group);

        res.redirect('/groups/' + groupId);
    },
    show: (req, res) => {
        let group = groupsModel.find(req.params.id);

        res.render('groups/detail', { group });
    }
}