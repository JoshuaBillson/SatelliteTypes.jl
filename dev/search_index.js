var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SatelliteDataSources","category":"page"},{"location":"#SatelliteDataSources","page":"Home","title":"SatelliteDataSources","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SatelliteDataSources.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SatelliteDataSources]","category":"page"},{"location":"#SatelliteDataSources.AbstractLayerSource","page":"Home","title":"SatelliteDataSources.AbstractLayerSource","text":"Super type of all concrete layer sources.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.AbstractSatellite","page":"Home","title":"SatelliteDataSources.AbstractSatellite","text":"The supertype of all sensor types. Provides sensor-specific information to many RemoteSensingToolbox methods.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.Band","page":"Home","title":"SatelliteDataSources.Band","text":"Represents a layer corresponding to a particular band in a multi-band file.  Commonly used for sensors which store their bands as a single multi-band file.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.BitField","page":"Home","title":"SatelliteDataSources.BitField","text":"Represents a layer corresponding to a particular bit in a single-band file.  Commonly used for QA and scene classification masks.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.File","page":"Home","title":"SatelliteDataSources.File","text":"Represents a layer corresponding to a file.  Commonly used for sensors which store their bands in individual files.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.Landsat7","page":"Home","title":"SatelliteDataSources.Landsat7","text":"Implements the AbstractSatellite interface for Landsat 8.\n\nSupported Layers: :B1, :B2, :B3, :B4, :B5, :B7, :blue, :green, :red, :nir, :swir1, :swir2, :panchromatic, :thermal, :dilatedclouds, :clouds, :cloudshadow, :snow, :water\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.Landsat8","page":"Home","title":"SatelliteDataSources.Landsat8","text":"Implements the AbstractSatellite interface for Landsat 8.\n\nSupported Layers: :B1, :B2, :B3, :B4, :B5, :B6, :B7, :blue, :green, :red, :nir, :swir1, :swir2, :panchromatic, :thermal1, :thermal2, :dilatedclouds, :clouds, :cloudshadow, :snow, :water.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.Landsat9","page":"Home","title":"SatelliteDataSources.Landsat9","text":"Implements the AbstractSatellite interface for Landsat 9.\n\nSupported Layers: :B1, :B2, :B3, :B4, :B5, :B6, :B7, :blue, :green, :red, :nir, :swir1, :swir2, :panchromatic, :thermal1, :thermal2, :dilatedclouds, :clouds, :cloudshadow, :snow, :water.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.MaskValue","page":"Home","title":"SatelliteDataSources.MaskValue","text":"Represents a layer corresponding to a particular bit in a single-band file.  Commonly used for QA and scene classification masks.\n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.Sentinel2","page":"Home","title":"SatelliteDataSources.Sentinel2","text":"Implements the AbstractSatellite interface for Sentinel 2. The user must specify a resolution of eith 10, 20, or 60 meters.\n\nSentinel2{10} Layers: :B02, :B03, :B04, :B08, :blue, :green, :red, :nir  \n\nSentinel2{20} Layers: :B02, :B03, :B04, :B05, :B06, :B07, :B8A, :B11, :B12, :blue, :green, :red, :nir, :swir1, :swir2, :cloudshadow, :cloudsmed, :clouds_high, :cirrus, :vegetation, :soil, :water, :snow  \n\nSentinel2{60} Layers: :B01, :B02, :B03, :B04, :B05, :B06, :B07, :B8A, :B09, :B11, :B12, :blue, :green, :red, :nir, :swir1, :swir2, :cloudshadow, :cloudsmed, :clouds_high, :cirrus, :vegetation, :soil, :water, :snow  \n\n\n\n\n\n","category":"type"},{"location":"#SatelliteDataSources.bands","page":"Home","title":"SatelliteDataSources.bands","text":"bands(::Type{AbstractSatellite})\n\nReturn the band names in order from shortest to longest wavelength.\n\n\n\n\n\n","category":"function"},{"location":"#SatelliteDataSources.blue_band-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractSatellite","page":"Home","title":"SatelliteDataSources.blue_band","text":"blue_band(::Type{AbstractSatellite})\n\nReturn the blue band for the given sensor.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.dn_offset-Tuple{Type{<:AbstractSatellite}, Symbol}","page":"Home","title":"SatelliteDataSources.dn_offset","text":"dn_offset(::Type{AbstractSatellite}, layer::Symbol)\n\nReturn the offset factor applied to digital numbers.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.dn_scale-Tuple{Type{<:AbstractSatellite}, Symbol}","page":"Home","title":"SatelliteDataSources.dn_scale","text":"dn_scale(::Type{AbstractSatellite}, layer::Symbol)\n\nReturn the scale factor applied to digital numbers.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.green_band-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractSatellite","page":"Home","title":"SatelliteDataSources.green_band","text":"green_band(::Type{AbstractSatellite})\n\nReturn the green band for the given sensor.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.layer_source","page":"Home","title":"SatelliteDataSources.layer_source","text":"layer_source(::Type{AbstractSatellite}, layer::Symbol)\n\nRetrieve the AbstractLayerSource for the given layer and sensor type.\n\n\n\n\n\n","category":"function"},{"location":"#SatelliteDataSources.layers","page":"Home","title":"SatelliteDataSources.layers","text":"layers(::Type{AbstractSatellite})\n\nReturn the names of all layers available for the given sensor.\n\n\n\n\n\n","category":"function"},{"location":"#SatelliteDataSources.nir_band-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractSatellite","page":"Home","title":"SatelliteDataSources.nir_band","text":"nir_band(::Type{AbstractSatellite})\n\nReturn the nir band for the given sensor.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.red_band-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractSatellite","page":"Home","title":"SatelliteDataSources.red_band","text":"red_band(::Type{AbstractSatellite})\n\nReturn the red band for the given sensor.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.swir1_band-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractSatellite","page":"Home","title":"SatelliteDataSources.swir1_band","text":"swir1_band(::Type{AbstractSatellite})\n\nReturn the swir1 band for the given sensor.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.swir2_band-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractSatellite","page":"Home","title":"SatelliteDataSources.swir2_band","text":"swir2_band(::Type{AbstractSatellite})\n\nReturn the swir2 band for the given sensor.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.wavelength-Union{Tuple{T}, Tuple{Type{T}, Symbol}} where T<:AbstractSatellite","page":"Home","title":"SatelliteDataSources.wavelength","text":"wavelength(::Type{AbstractSatellite}, band::Symbol)\n\nReturn the central wavelength for the corresponding band.\n\n\n\n\n\n","category":"method"},{"location":"#SatelliteDataSources.wavelengths","page":"Home","title":"SatelliteDataSources.wavelengths","text":"wavelengths(::Type{AbstractSatellite})\n\nReturn the central wavelengths for all bands in order from shortest to longest.\n\n\n\n\n\n","category":"function"}]
}
