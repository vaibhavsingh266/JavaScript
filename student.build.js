"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Student =
/*#__PURE__*/
function () {
  function Student() {
    _classCallCheck(this, Student);
  }

  _createClass(Student, [{
    key: "getRecord",
    value: function getRecord(id) {
      var students = new Map(JSON.parse(localStorage.getItem('Students')));
      return students.get(id);
    }
  }, {
    key: "addRecord",
    value: function addRecord(id, address, certification, achievement) {
      var students = new Map(JSON.parse(localStorage.getItem('Students')));
      var student = students.get(id);
      student.Address = address;
      student.Certification = certification;
      student.SpAch = achievement;
      students.set(id, student);
      localStorage.setItem('Students', JSON.stringify(Array.from(students)));
      var b = [];
      var c = [];
      students.forEach(function (v, i) {
        var a = v.Certification;

        for (var j in a) // for certifications to array     first step for Cer
        {
          b.push(_defineProperty({}, a[j].toLowerCase(), i));
        }

        console.log(v.SpAch);
        var d = v.SpAch;
        console.log(d); // for special achievement to array      first step for SpAC

        for (var j in d) {
          c.push(_defineProperty({}, d[j].toLowerCase(), i));
        }
      });
      var o = {}; //array to json for certifications    second step for Cer

      for (var i = 0, l = b.length; i < l; i++) {
        var key = Object.keys(b[i]);

        if (!o[key]) {
          o[key] = [];
        }

        o[key].push(b[i][key]);
      }

      var ce = new Map();
      Object.keys(o).forEach(function (k) {
        ce.set(k, o[k]);
      }); // const cobj_tomap1 = ( o => {//for json to map for certifications   third step for Cer
      

      var p = {}; // array to json for special achievements      second step for SpeAc

      for (var i = 0, l = c.length; i < l; i++) {
        var key = Object.keys(c[i]);

        if (!p[key]) {
          p[key] = [];
        }

        p[key].push(c[i][key]);
      }

      var mp = new Map();
      Object.keys(p).forEach(function (k) {
        mp.set(k, p[k]);
      });
      /*const cobj_tomap = ( p => {//for json to map for special achievements     third  step for SpeAc
          const mp = new Map;
          Object.keys ( p ). forEach (k => { mp.set(k, p[k]) });
          return mp;
      });*/

      localStorage.setItem('certificates', JSON.stringify(Array.from(ce)));
      localStorage.setItem('spach', JSON.stringify(Array.from(mp))); //console.log(p);
      //console.log(p.[bc]);

      console.log(mp);
      console.log(ce);
    }
  }, {
    key: "searchStudent",
    value: function searchStudent(value) {}
  }]);

  return Student;
}(); // a = new Student();
// a.addRecord(3, "pUn", ["d","f"], ["map","ddd"]);
