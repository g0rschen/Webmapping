var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FLLLAYER_HINTERGRUNDKEINEDATEN_1 = new ol.format.GeoJSON();
var jsonSource_FLLLAYER_HINTERGRUNDKEINEDATEN_1 = new ol.source.Vector({
    attributions: ' ',
    format: format_FLLLAYER_HINTERGRUNDKEINEDATEN_1
});var lyr_FLLLAYER_HINTERGRUNDKEINEDATEN_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_FLLLAYER_HINTERGRUNDKEINEDATEN_1, 
    style: style_FLLLAYER_HINTERGRUNDKEINEDATEN_1,
    interactive: false,
    title: 'FÜLLLAYER_HINTERGRUND (KEINE DATEN)'
});

function getFLLLAYER_HINTERGRUNDKEINEDATEN_1Json(geojson) {
    var features_FLLLAYER_HINTERGRUNDKEINEDATEN_1 = format_FLLLAYER_HINTERGRUNDKEINEDATEN_1.readFeatures(geojson);
    jsonSource_FLLLAYER_HINTERGRUNDKEINEDATEN_1.addFeatures(features_FLLLAYER_HINTERGRUNDKEINEDATEN_1);
}
var format_SubIndex1_2 = new ol.format.GeoJSON();
var jsonSource_SubIndex1_2 = new ol.source.Vector({
    attributions: ' ',
    format: format_SubIndex1_2
});var lyr_SubIndex1_2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SubIndex1_2, 
    style: style_SubIndex1_2,
    interactive: true,
    title: 'Sub-Index 1'
});

function getSubIndex1_2Json(geojson) {
    var features_SubIndex1_2 = format_SubIndex1_2.readFeatures(geojson);
    jsonSource_SubIndex1_2.addFeatures(features_SubIndex1_2);
}
var format_SBahnRing_3 = new ol.format.GeoJSON();
var jsonSource_SBahnRing_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_SBahnRing_3
});var lyr_SBahnRing_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SBahnRing_3, 
    style: style_SBahnRing_3,
    interactive: false,
    title: 'S-Bahn-Ring'
});

function getSBahnRing_3Json(geojson) {
    var features_SBahnRing_3 = format_SBahnRing_3.readFeatures(geojson);
    jsonSource_SBahnRing_3.addFeatures(features_SBahnRing_3);
}
var group_FORSCHUNGSFRAGE_2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'FORSCHUNGSFRAGE_2'});
var group__INDEX1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '_INDEX1'});
var group__INDEX2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '_INDEX2'});
var group__INDEX3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '_INDEX3'});
var group__INDEX4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '_INDEX4'});
var group_WohnatlasAngebotsmieten = new ol.layer.Group({
                                layers: [lyr_SubIndex1_2,],
                                fold: "open",
                                title: 'Wohnatlas - Angebotsmieten'});
var group_WohnatlasSGBIIDaten = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Wohnatlas - SGB II Daten'});
var group_WohnatlasAnteilEinwohnermitmind5JhrigerWohndauer = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Wohnatlas - Anteil Einwohner mit mind. 5 Jähriger Wohndauer '});
var group_WohnatlasAnteilderSozialwohnungen = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Wohnatlas - Anteil der Sozialwohnungen '});
var group_WohnatlasUmwandlungvonMietinEigentumswohnungen = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Wohnatlas - Umwandlung von Miet- in Eigentumswohnungen'});
var group_WohnatlasWohnungsverkufe = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Wohnatlas - Wohnungsverkäufe'});
var group_LORbersichtskarte = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'LOR Übersichtskarte'});

lyr_OpenStreetMap_0.setVisible(true);lyr_FLLLAYER_HINTERGRUNDKEINEDATEN_1.setVisible(true);lyr_SubIndex1_2.setVisible(true);lyr_SBahnRing_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FLLLAYER_HINTERGRUNDKEINEDATEN_1,group_WohnatlasAngebotsmieten,lyr_SBahnRing_3];
lyr_FLLLAYER_HINTERGRUNDKEINEDATEN_1.set('fieldAliases', {'bezirk': 'bezirk', 'prognoseraum_bezeichnung': 'prognoseraum_bezeichnung', 'prognoseraum_nummer': 'prognoseraum_nummer', 'angebotsmieten': 'angebotsmieten', 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten': 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten', 'SGB II Anteil: Veränderung 2009-2020_Index_Min-Max-Skalierung': 'SGB II Anteil: Veränderung 2009-2020_Index_Min-Max-Skalierung', '2009-2020 (Prozentuale Veraenderung)': '2009-2020 (Prozentuale Veraenderung)', 'Z_Mietpreisentwicklung': 'Z_Mietpreisentwicklung', 'Index_Min-Max-Skalierung': 'Index_Min-Max-Skalierung', 'Index_Mieten+SGBII_2009-2020': 'Index_Mieten+SGBII_2009-2020', });
lyr_SubIndex1_2.set('fieldAliases', {'bezirk': 'district', 'prognoseraum_bezeichnung': 'name', 'prognoseraum_nummer': 'prognoseraum_nummer', 'angebotsmieten': 'angebotsmieten', 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten': 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten', '2009-2020 (Prozentuale Veraenderung)': '2009-2020 (Prozentuale Veraenderung)', 'Z_Mietpreisentwicklung': 'Z_Mietpreisentwicklung', 'Index_Min-Max-Skalierung': 'Indexvalue', 'Rank Sub-Index 1': 'rank', 'Sub-Index 1': 'indexvalue', });
lyr_SBahnRing_3.set('fieldAliases', {'id': 'id', 'typ': 'typ', });
lyr_FLLLAYER_HINTERGRUNDKEINEDATEN_1.set('fieldImages', {'bezirk': 'TextEdit', 'prognoseraum_bezeichnung': 'TextEdit', 'prognoseraum_nummer': 'TextEdit', 'angebotsmieten': 'TextEdit', 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten': 'TextEdit', 'SGB II Anteil: Veränderung 2009-2020_Index_Min-Max-Skalierung': 'TextEdit', '2009-2020 (Prozentuale Veraenderung)': 'TextEdit', 'Z_Mietpreisentwicklung': 'TextEdit', 'Index_Min-Max-Skalierung': 'TextEdit', 'Index_Mieten+SGBII_2009-2020': 'TextEdit', });
lyr_SubIndex1_2.set('fieldImages', {'bezirk': 'TextEdit', 'prognoseraum_bezeichnung': 'TextEdit', 'prognoseraum_nummer': 'TextEdit', 'angebotsmieten': 'TextEdit', 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten': 'TextEdit', '2009-2020 (Prozentuale Veraenderung)': 'TextEdit', 'Z_Mietpreisentwicklung': 'TextEdit', 'Index_Min-Max-Skalierung': 'TextEdit', 'Rank Sub-Index 1': 'Range', 'Sub-Index 1': 'TextEdit', });
lyr_SBahnRing_3.set('fieldImages', {'id': 'Range', 'typ': 'TextEdit', });
lyr_FLLLAYER_HINTERGRUNDKEINEDATEN_1.set('fieldLabels', {'bezirk': 'no label', 'prognoseraum_bezeichnung': 'no label', 'prognoseraum_nummer': 'no label', 'angebotsmieten': 'no label', 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten': 'no label', 'SGB II Anteil: Veränderung 2009-2020_Index_Min-Max-Skalierung': 'no label', '2009-2020 (Prozentuale Veraenderung)': 'no label', 'Z_Mietpreisentwicklung': 'no label', 'Index_Min-Max-Skalierung': 'no label', 'Index_Mieten+SGBII_2009-2020': 'no label', });
lyr_SubIndex1_2.set('fieldLabels', {'bezirk': 'inline label - always visible', 'prognoseraum_bezeichnung': 'inline label - always visible', 'prognoseraum_nummer': 'hidden field', 'angebotsmieten': 'hidden field', 'Jahrgang: 2020 (Angebotsmieten)_angebotsmieten': 'hidden field', '2009-2020 (Prozentuale Veraenderung)': 'hidden field', 'Z_Mietpreisentwicklung': 'hidden field', 'Index_Min-Max-Skalierung': 'inline label - always visible', 'Rank Sub-Index 1': 'inline label - always visible', 'Sub-Index 1': 'hidden field', });
lyr_SBahnRing_3.set('fieldLabels', {'id': 'no label', 'typ': 'no label', });
lyr_SBahnRing_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});