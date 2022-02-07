function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function insertModalInstrument(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (instrument) {pug_html = pug_html + "\u003Cdiv class=\"modal-header\" id=\"container-fill-height\"\u003E\u003Ch2 class=\"my-0\"\u003E" + (pug_escape(null == (pug_interp = instrument.name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cspan class=\"close item-upper-right px-4 py-3\"\u003E" + (pug_escape(null == (pug_interp = "×") ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-body\"\u003E\u003Cp class=\"d-flex justify-content-center my-0\"\u003E\u003Cstrong class=\"me-2\"\u003E" + (pug_escape(null == (pug_interp = "Type:") ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E" + (pug_escape(null == (pug_interp = instrument.type) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
if (instrument.subtype) {
pug_html = pug_html + "\u003Cp class=\"d-flex justify-content-center my-0\"\u003E\u003Cstrong class=\"me-2\"\u003E" + (pug_escape(null == (pug_interp = "Subtype:") ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E" + (pug_escape(null == (pug_interp = instrument.subtype) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003Cp class=\"d-flex justify-content-center my-0\"\u003E\u003Cstrong class=\"me-2\"\u003E" + (pug_escape(null == (pug_interp = "Price:") ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E" + (pug_escape(null == (pug_interp = instrument.price) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"d-flex justify-content-center my-0\"\u003E\u003Cstrong class=\"me-2\"\u003E" + (pug_escape(null == (pug_interp = "Sonority:") ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E" + (pug_escape(null == (pug_interp = instrument.sonority) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
if (instrument.summary) {
pug_html = pug_html + "\u003Cp class=\"d-flex justify-content-center mt-0 mx-5\"\u003E\u003Cstrong class=\"me-2\"\u003E" + (pug_escape(null == (pug_interp = "Summary:") ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E" + (pug_escape(null == (pug_interp = instrument.summary) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
else {
pug_html = pug_html + "\u003Cp class=\"d-flex justify-content-center mt-0 mb-3\"\u003E\u003Cstrong class=\"me-2\"\u003E" + (pug_escape(null == (pug_interp = "No Summary") ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003Ca class=\"d-flex justify-content-center\" href=\"#\"\u003E";
if ((instrument.name!="Snare Drum")) {
pug_html = pug_html + "\u003Cimg" + (" class=\"img-fluid\""+pug_attr("src", `img/${instrument.name}.png`, true, false)+" alt=\"img\"") + "\u002F\u003E";
}
else {
pug_html = pug_html + "\u003Cimg class=\"img-fluid\" src=\"img\u002FsnareDrum.png\" alt=\"img\"\u002F\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";}.call(this,"instrument" in locals_for_with?locals_for_with.instrument:typeof instrument!=="undefined"?instrument:undefined));;return pug_html;}