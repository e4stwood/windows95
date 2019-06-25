const path = require ('path');
const package = require ('./ package.json');

module.exports = {
  packagerConfig: {
    asar: {
      desempaquetar: '** / images / *. img'
    }
    icon: path.resolve (__ dirname, 'asset', 'icon'),
    appBundleId: 'com.felixrieseberg.windows95',
    appCategoryType: 'public.app-category.developer-tools',
    win32metadata: {
      Nombre de la empresa: 'Felix Rieseberg',
      Nombre de archivo original: 'windows95',
    }
    osxSign: {
      identidad: 'Aplicación de ID de desarrollador: Felix Rieseberg (LT94ZKYDCJ)'
    }
  }
  fabricantes: [
    {
      nombre: '@ electron-forge / maker-squirrel',
      plataformas: ['win32'],
      config: (arch) => {
        regreso {
          nombre: 'windows95',
          autores: 'Felix Rieseberg',
          exe: 'windows95.exe',
          noMsi: cierto,
          Lanzamientos remotos: '',
          setupExe: `windows95 - $ {package.version} -setup - $ {arch} .exe`,
          setupIcon: path.resolve (__ dirname, 'asset', 'icon.ico'),
          certificateFile: process.env.WINDOWS_CERTIFICATE_FILE,
          certificatePassword: process.env.WINDOWS_CERTIFICATE_PASSWORD
        }
      }
    }
    {
      nombre: '@ electron-forge / maker-zip',
      plataformas: ['darwin']
    }
    {
      nombre: '@ electron-forge / maker-deb',
      plataformas: ['linux']
    }
    {
      nombre: '@ electron-forge / maker-rpm',
      plataformas: ['linux']
    }
    {
      nombre: '@ electron-forge / maker-flatpak',
      plataformas: ['linux']
    }
  ]
};
