# Sales Analytics Dashboard API

A comprehensive Django REST Framework backend for a sales analytics dashboard featuring card collections, orders, user management, and real-time analytics.

## 📋 Requirements

- Python 3.11+
- Django 4.2+
- Django REST Framework
- PostgreSQL (for production)
- Redis (for caching)

## 🛠️ Installation

### 2. Create Virtual Environment

```bash
pip install virtualenv
virtualenv venv
venv\Scripts\activate  # On Windows
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Database Setup

```bash
# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

### 6. Run the Development Server

```bash
python manage.py runserver
```

### 7. for testing purposes

{
"username": "admin@gmail.com",
"password": "Admin@123"
}
