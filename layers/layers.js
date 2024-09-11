ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([210665.032326, 7521139.273063, 211439.558972, 7521521.844472]);
var wms_layers = [];


        var lyr_GoogleEarthSatellite_0 = new ol.layer.Tile({
            'title': 'Google Earth Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortofoto_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortofoto",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ortofoto_1.png",
    attributions: ' ',
                                projection: 'EPSG:31984',
                                alwaysInRange: true,
                                imageExtent: [210729.730500, 7521194.247000, 211198.566400, 7521539.536600]
                            })
                        });
var format_LimitePoloUniversitrio_2 = new ol.format.GeoJSON();
var features_LimitePoloUniversitrio_2 = format_LimitePoloUniversitrio_2.readFeatures(json_LimitePoloUniversitrio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LimitePoloUniversitrio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitePoloUniversitrio_2.addFeatures(features_LimitePoloUniversitrio_2);
var lyr_LimitePoloUniversitrio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitePoloUniversitrio_2, 
                style: style_LimitePoloUniversitrio_2,
                popuplayertitle: "Limite Polo Universitário",
                interactive: false,
                title: '<img src="styles/legend/LimitePoloUniversitrio_2.png" /> Limite Polo Universitário'
            });
var format_BlocosUFRJ_3 = new ol.format.GeoJSON();
var features_BlocosUFRJ_3 = format_BlocosUFRJ_3.readFeatures(json_BlocosUFRJ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_BlocosUFRJ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlocosUFRJ_3.addFeatures(features_BlocosUFRJ_3);
var lyr_BlocosUFRJ_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlocosUFRJ_3, 
                style: style_BlocosUFRJ_3,
                popuplayertitle: "Blocos UFRJ",
                interactive: false,
    title: 'Blocos UFRJ<br />\
    <img src="styles/legend/BlocosUFRJ_3_0.png" /> Bloco A<br />\
    <img src="styles/legend/BlocosUFRJ_3_1.png" /> Bloco B<br />\
    <img src="styles/legend/BlocosUFRJ_3_2.png" /> Bloco C<br />\
    <img src="styles/legend/BlocosUFRJ_3_3.png" /> Bloco D<br />'
        });
var format_PontosdeInteresse_4 = new ol.format.GeoJSON();
var features_PontosdeInteresse_4 = format_PontosdeInteresse_4.readFeatures(json_PontosdeInteresse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PontosdeInteresse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeInteresse_4.addFeatures(features_PontosdeInteresse_4);
var lyr_PontosdeInteresse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosdeInteresse_4, 
                style: style_PontosdeInteresse_4,
                popuplayertitle: "Pontos de Interesse",
                interactive: false,
    title: 'Pontos de Interesse<br />\
    <img src="styles/legend/PontosdeInteresse_4_0.png" /> Área de Expansão CRIOS<br />\
    <img src="styles/legend/PontosdeInteresse_4_1.png" /> Área de lazer<br />\
    <img src="styles/legend/PontosdeInteresse_4_2.png" /> Deposito de Resíduos Sólidos<br />\
    <img src="styles/legend/PontosdeInteresse_4_3.png" /> Entrada Polo<br />\
    <img src="styles/legend/PontosdeInteresse_4_4.png" /> Estacionamento<br />\
    <img src="styles/legend/PontosdeInteresse_4_5.png" /> Laboratórios - UFRJ<br />\
    <img src="styles/legend/PontosdeInteresse_4_6.png" /> Prédio da Engenharia - UFRJ<br />\
    <img src="styles/legend/PontosdeInteresse_4_7.png" /> Secretaria de Educação e CRIOS<br />'
        });
var format_InspeoSecretariadaEducaoeCRIOS_5 = new ol.format.GeoJSON();
var features_InspeoSecretariadaEducaoeCRIOS_5 = format_InspeoSecretariadaEducaoeCRIOS_5.readFeatures(json_InspeoSecretariadaEducaoeCRIOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_InspeoSecretariadaEducaoeCRIOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InspeoSecretariadaEducaoeCRIOS_5.addFeatures(features_InspeoSecretariadaEducaoeCRIOS_5);
var lyr_InspeoSecretariadaEducaoeCRIOS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InspeoSecretariadaEducaoeCRIOS_5, 
                style: style_InspeoSecretariadaEducaoeCRIOS_5,
                popuplayertitle: "Inspeção Secretaria da Educação e CRIOS",
                interactive: false,
                title: '<img src="styles/legend/InspeoSecretariadaEducaoeCRIOS_5.png" /> Inspeção Secretaria da Educação e CRIOS'
            });
var format_InspeoBlocosPontosdeAteno_6 = new ol.format.GeoJSON();
var features_InspeoBlocosPontosdeAteno_6 = format_InspeoBlocosPontosdeAteno_6.readFeatures(json_InspeoBlocosPontosdeAteno_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_InspeoBlocosPontosdeAteno_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InspeoBlocosPontosdeAteno_6.addFeatures(features_InspeoBlocosPontosdeAteno_6);
var lyr_InspeoBlocosPontosdeAteno_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InspeoBlocosPontosdeAteno_6, 
                style: style_InspeoBlocosPontosdeAteno_6,
                popuplayertitle: "Inspeção Blocos - Pontos de Atenção",
                interactive: false,
    title: 'Inspeção Blocos - Pontos de Atenção<br />\
    <img src="styles/legend/InspeoBlocosPontosdeAteno_6_0.png" /> Caixa d\'água sem tampa<br />\
    <img src="styles/legend/InspeoBlocosPontosdeAteno_6_1.png" /> Caixa d\'água tombada<br />\
    <img src="styles/legend/InspeoBlocosPontosdeAteno_6_2.png" /> Objeto desconhecido<br />\
    <img src="styles/legend/InspeoBlocosPontosdeAteno_6_3.png" /> Telha Quebrada<br />\
    <img src="styles/legend/InspeoBlocosPontosdeAteno_6_4.png" /> Telha Remendada<br />'
        });
var format_InspeoArea_7 = new ol.format.GeoJSON();
var features_InspeoArea_7 = format_InspeoArea_7.readFeatures(json_InspeoArea_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_InspeoArea_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InspeoArea_7.addFeatures(features_InspeoArea_7);
var lyr_InspeoArea_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InspeoArea_7, 
                style: style_InspeoArea_7,
                popuplayertitle: "Inspeção Aérea",
                interactive: false,
    title: 'Inspeção Aérea<br />\
    <img src="styles/legend/InspeoArea_7_0.png" /> Calçamento Quebrado<br />\
    <img src="styles/legend/InspeoArea_7_1.png" /> Conteinêres Abertos<br />\
    <img src="styles/legend/InspeoArea_7_2.png" /> Resíduo Descartado<br />'
        });

lyr_GoogleEarthSatellite_0.setVisible(true);lyr_Ortofoto_1.setVisible(true);lyr_LimitePoloUniversitrio_2.setVisible(true);lyr_BlocosUFRJ_3.setVisible(true);lyr_PontosdeInteresse_4.setVisible(true);lyr_InspeoSecretariadaEducaoeCRIOS_5.setVisible(true);lyr_InspeoBlocosPontosdeAteno_6.setVisible(true);lyr_InspeoArea_7.setVisible(true);
var layersList = [lyr_GoogleEarthSatellite_0,lyr_Ortofoto_1,lyr_LimitePoloUniversitrio_2,lyr_BlocosUFRJ_3,lyr_PontosdeInteresse_4,lyr_InspeoSecretariadaEducaoeCRIOS_5,lyr_InspeoBlocosPontosdeAteno_6,lyr_InspeoArea_7];
lyr_LimitePoloUniversitrio_2.set('fieldAliases', {'id': 'id', 'area_m': 'area_m', });
lyr_BlocosUFRJ_3.set('fieldAliases', {'id': 'id', 'NOME': 'NOME', 'Area': 'Area', });
lyr_PontosdeInteresse_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area': 'Area', 'NOME': 'NOME', 'layer': 'layer', 'path': 'path', });
lyr_InspeoSecretariadaEducaoeCRIOS_5.set('fieldAliases', {'id': 'id', });
lyr_InspeoBlocosPontosdeAteno_6.set('fieldAliases', {'id': 'id', 'POI': 'POI', });
lyr_InspeoArea_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_LimitePoloUniversitrio_2.set('fieldImages', {'id': 'TextEdit', 'area_m': 'TextEdit', });
lyr_BlocosUFRJ_3.set('fieldImages', {'id': 'TextEdit', 'NOME': 'TextEdit', 'Area': 'TextEdit', });
lyr_PontosdeInteresse_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Area': 'TextEdit', 'NOME': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_InspeoSecretariadaEducaoeCRIOS_5.set('fieldImages', {'id': 'TextEdit', });
lyr_InspeoBlocosPontosdeAteno_6.set('fieldImages', {'id': 'TextEdit', 'POI': 'TextEdit', });
lyr_InspeoArea_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LimitePoloUniversitrio_2.set('fieldLabels', {'id': 'no label', 'area_m': 'no label', });
lyr_BlocosUFRJ_3.set('fieldLabels', {'id': 'no label', 'NOME': 'no label', 'Area': 'no label', });
lyr_PontosdeInteresse_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Area': 'no label', 'NOME': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_InspeoSecretariadaEducaoeCRIOS_5.set('fieldLabels', {'id': 'no label', });
lyr_InspeoBlocosPontosdeAteno_6.set('fieldLabels', {'id': 'no label', 'POI': 'no label', });
lyr_InspeoArea_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_InspeoArea_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});