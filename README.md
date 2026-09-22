# 🚀 [Proje Adı]

> [Projenin tek cümlelik kısa ve vurucu açıklaması. Örn: Next.js ve Spring Boot ile geliştirilmiş, Cloudinary entegrasyonlu yönetilebilir galeri ve yönetim paneli uygulaması.]

---

## 📌 İçindekiler
- [Özellikler](#-özellikler)
- [Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [Mimarisi ve Ekran Görüntüleri](#-mimarisi-ve-ekran-görüntüleri)
- [Kurulum ve Başlangıç](#-kurulum-ve-başlangıç)
  - [Gereksinimler](#gereksinimler)
  - [Backend (Spring Boot)](#backend-spring-boot)
  - [Frontend (Next.js)](#frontend-nextjs)
- [Çevre Değişkenleri (.env)](#-çevre-değişkenleri-env)
- [API Endpoints](#-api-endpoints)
- [Lisans](#-lisans)

---

## ✨ Özellikler

- 🖼️ **Çoklu Fotoğraf Yükleme:** Cloudinary entegrasyonu ile fotoğrafları doğrudan bulut sunucusunda depolama.
- ⚡ **Server Actions:** Next.js Server Actions kullanarak hızlı ve güvenli form işlemleri.
- 🗄️ **PostgreSQL & JSONB:** Galeri fotoğraflarını PostgreSQL üzerinde `JSONB` tipinde esnek veri yapısıyla saklama.
- 🎨 **Modern Arayüz:** Tailwind CSS ve React Icons ile duyarlı (responsive) dashboard tasarımı.
- 🔒 **Güvenli Backend Yapısı:** Spring Boot REST API mimarisi ve custom DTO yapısı.

---

## 🛠️ Kullanılan Teknolojiler

### Frontend
- **Framework:** Next.js (App Router, Server Actions)
- **Kütüphaneler:** React, Tailwind CSS, React Hot Toast, React Icons

### Backend
- **Framework:** Java / Spring Boot (Spring Data JPA, Hibernate)
- **Veritabanı:** PostgreSQL (`JSONB` desteği ile)
- **Medya Depolama:** Cloudinary API

---

## 🖼️ Mimarisi ve Ekran Görüntüleri

| Dashboard / Galeri Yönetimi | Marka / Referans Yönetimi |
| :---: | :---: |
| ![Galeri Sayfası](https://via.placeholder.com/400x220?text=Galeri+Görseli) | ![Referans Sayfası](https://via.placeholder.com/400x220?text=Referans+Görseli) |

---

## 🚀 Kurulum ve Başlangıç

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edin.

### Gereksinimler
- **Node.js:** v18+ 
- **Java:** JDK 17+
- **PostgreSQL:** v14+

---

### Backend (Spring Boot)

1. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/kullanici-adi/proje-adi.git](https://github.com/kullanici-adi/proje-adi.git)
   cd proje-adi/backend
