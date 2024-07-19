### I have started a new React Native project on the concept of Rockets and the other details of the rockets.



keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

password: 123456
Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
for: CN=LOKESH R, OU=LOKESH_ORG, O=LOKESH_ORGANIZATION, L=COIMBATORE, ST=TAMILNADU, C=91
[Storing my-upload-key.keystore]

release {
if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
storeFile file(MYAPP_UPLOAD_STORE_FILE)
storePassword MYAPP_UPLOAD_STORE_PASSWORD
keyAlias MYAPP_UPLOAD_KEY_ALIAS
keyPassword MYAPP_UPLOAD_KEY_PASSWORD
}
}
}

adb install android/app/build/outputs/apk/release/app-release.apk

jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore android/app/my-upload-key.keystore android/app/build/outputs/apk/release/app-release.apk my-key-alias


"C:\Users\lokes\AppData\Local\Android\Sdk\build-tools\34.0.0\zipalign.exe"


C:\Users\lokes\AppData\Local\Android\Sdk\build-tools\34.0.0\zipalign -v -p 4 C:\Users\lokes\Documents\workspace\RocketProject-1999\android\app\build\outputs\apk\release\app-release.apk C:\Users\lokes\Documents\workspace\RocketProject-1999\android\app\build\outputs\apk\release\app-release-aligned.apk


C:\Users\lokes\AppData\Local\Android\Sdk\build-tools\34.0.0\apksigner sign --ks my-upload-key.keystore --ks-key-alias my-key-alias --out /path/to/your/app-release-signed.apk /path/to/your/app-release-unsigned.apk


android/app/my-upload-key.keystore