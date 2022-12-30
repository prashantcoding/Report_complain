const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    ave_name: {
        type: String,
    },
    ave_adderess:{
        type: String,
    },
    ana_name: {
        type: String,
    },
    ana_address: {
        type: String,
    },
    complain_in_summary:
    {
        type: String,
    },
    where:{
        type: String,
    },
    complain_accept_no:{
        type: String,
    },
    complain_accept_date: {
        type: String,
    },
    complain_panjikaran_no: {
        type: String,
    },
    complain_panjikaran_date:
    {
        type: String,
    },
    where_it_sent:{
        type: String,
    },
    avyshak_karwai:{
        type: String,
    },
    prativedan_no: {
        type: String,
    },
    partivedan_date: {
        type: String,
    },
    partivedan_result:
    {
        type: String,
    },
    remark:{
        type: String,
    }
  });

  
  module.exports = Report = mongoose.model("Reports", userSchema);