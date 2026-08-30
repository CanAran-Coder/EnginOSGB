package org.test.backend.Enums;

public enum Titles {
    ISGU("İş Güvenlik Uzmanı"),
    Doktor("İş Yeri Hekimi"),
    Muhasabe("Muhasebe"),
    Pazarlama("Pazarlama"),
    YSP("Yardımcı Sağlık Personeli");



    private final String label;

    Titles(String label) {
        this.label = label;
    }
}
