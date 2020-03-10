"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Admin =
/*#__PURE__*/
function () {
  function Admin() {
    _classCallCheck(this, Admin);

    if (localStorage.getItem('Students') == null) {
      localStorage.setItem('Students', JSON.stringify(Array.from(new Map())));
    }
  }

  _createClass(Admin, [{
    key: "addStudent",
    value: function addStudent(student) {
      var id = student.Name.slice(0, 3).toLowerCase();
      var students = new Map(JSON.parse(localStorage.getItem('Students')));
      var name = student.Name;
      var emailInput = student.Email;
      var dd = new Date();
      var uniqueEmail = true;
      students.forEach(function (v, i) {
        var ch;
        var str = v.Name;
        var email = v.Email;

        if (name.toLowerCase() == str.toLowerCase()) {
          ch = "".concat(name.substr(0, 3)).concat(dd.getDate()).concat(dd.getMonth() + 1).concat(dd.getFullYear());
          id = ch.toLowerCase();
        }

        if (email == emailInput) {
          uniqueEmail = false;
        }
      });
      if (!uniqueEmail) return false;
      students.set(id, student);
      localStorage.setItem('Students', JSON.stringify(Array.from(students)));
      return true;
    }
  }, {
    key: "getStudent",
    value: function getStudent() {
      var students = new Map(JSON.parse(localStorage.getItem('Students')));
      return students;
    }
  }, {
    key: "deleteStudent",
    value: function deleteStudent(id) {
      var students = new Map(JSON.parse(localStorage.getItem('Students')));
      students["delete"](id);
      localStorage.setItem('Students', JSON.stringify(Array.from(students)));
      return students;
    }
  }, {
    key: "getCredentials",
    value: function getCredentials() {
      var crd = new Map();
      crd.set('id', 1);
      crd.set('pwd', "admin");
      return crd;
    }
  }, {
    key: "search",
    value: function search(inputData) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "certificates";
      var searchData = new Map(JSON.parse(localStorage.getItem(option)));
      var students = new Map(JSON.parse(localStorage.getItem('Students')));
      var studentList = new Map();
      searchData.forEach(function (v, i) {
        if (i.startsWith(inputData)) {
          for (var j in v) {
            var data = students.get(v[j]);
            console.log(data);
            studentList.set(v[j], data);
          }
        }
      });
      return studentList;
    }
  }]);

  return Admin;
}();
