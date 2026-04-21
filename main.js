<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>E-Library | Aplikasi Peminjaman Buku Digital</title>
    <!-- Font Awesome 6 (Free) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Google Font: Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .app-container {
            max-width: 1400px;
            margin: 0 auto;
            background: rgba(255,255,255,0.95);
            border-radius: 32px;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
            overflow: hidden;
            backdrop-filter: blur(2px);
            transition: all 0.2s;
        }

        .header {
            background: #1e293b;
            color: white;
            padding: 1.2rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .logo h1 {
            font-size: 1.6rem;
            font-weight: 600;
        }
        .logo p {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        .user-info {
            background: #0f172a;
            padding: 0.5rem 1.2rem;
            border-radius: 60px;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .btn-logout {
            background: #ef4444;
            border: none;
            color: white;
            padding: 0.3rem 1rem;
            border-radius: 40px;
            cursor: pointer;
            font-weight: 500;
            transition: 0.2s;
        }
        .btn-logout:hover {
            background: #dc2626;
        }

        .dashboard {
            display: flex;
            min-height: 70vh;
        }
        .sidebar {
            width: 260px;
            background: #f8fafc;
            border-right: 1px solid #e2e8f0;
            padding: 1.5rem 0;
        }
        .sidebar-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 0.9rem 1.8rem;
            cursor: pointer;
            font-weight: 500;
            color: #334155;
            transition: 0.2s;
            border-left: 4px solid transparent;
        }
        .sidebar-item i {
            width: 24px;
            font-size: 1.2rem;
        }
        .sidebar-item:hover, .sidebar-item.active {
            background: #eef2ff;
            color: #2563eb;
            border-left-color: #2563eb;
        }
        .content-area {
            flex: 1;
            padding: 2rem;
            background: #ffffff;
            overflow-x: auto;
        }

        .card {
            background: white;
            border-radius: 24px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border: 1px solid #eef2ff;
        }
        .btn-primary {
            background: #2563eb;
            color: white;
            border: none;
            padding: 0.5rem 1.2rem;
            border-radius: 40px;
            cursor: pointer;
            font-weight: 500;
            transition: 0.2s;
        }
        .btn-secondary {
            background: #f1f5f9;
            color: #1e293b;
            border: 1px solid #cbd5e1;
        }
        .btn-danger {
            background: #ef4444;
            color: white;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        th, td {
            text-align: left;
            padding: 12px 8px;
            border-bottom: 1px solid #e2e8f0;
        }
        th {
            background-color: #f1f5f9;
            font-weight: 600;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        input, select, textarea {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid #cbd5e1;
            border-radius: 16px;
            margin-top: 6px;
        }
        .search-bar {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        .badge {
            background: #e2e8f0;
            padding: 4px 10px;
            border-radius: 50px;
            font-size: 0.7rem;
            font-weight: 600;
        }
        .flex-btns {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .modal {
            display: none;
            position: fixed;
            top:0; left:0;
            width:100%; height:100%;
            background: rgba(0,0,0,0.5);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background: white;
            width: 90%;
            max-width: 500px;
            border-radius: 32px;
            padding: 2rem;
        }
        @media (max-width: 768px) {
            .dashboard { flex-direction: column; }
            .sidebar { width: 100%; display: flex; flex-wrap: wrap; overflow-x: auto; }
            .sidebar-item { padding: 0.6rem 1rem; }
        }
        .doc-section {
            background: #f9f9ff;
            border-radius: 20px;
            padding: 1.2rem;
            margin-top: 2rem;
            border-left: 6px solid #3b82f6;
        }
        footer {
            background: #eef2ff;
            text-align: center;
            padding: 1rem;
            font-size: 0.8rem;
            color: #334155;
        }
        .toast-notif {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #1e293b;
            color: white;
            padding: 12px 20px;
            border-radius: 40px;
            font-size: 0.9rem;
            z-index: 1100;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            animation: fadeOut 3s forwards;
        }
        @keyframes fadeOut {
            0% { opacity: 1; }
            70% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
        }
    </style>
</head>
<body>
<div class="app-container" id="appRoot"></div>

<script>
    // ----------------------------- DATABASE SIMULASI (localStorage) ---------------------------------
    let DB = {
        users: [],
        books: [],
        transactions: []
    };

    function initDatabase() {
        const storedUsers = localStorage.getItem('lib_users');
        const storedBooks = localStorage.getItem('lib_books');
        const storedTransactions = localStorage.getItem('lib_transactions');
        if(storedUsers) DB.users = JSON.parse(storedUsers);
        if(storedBooks) DB.books = JSON.parse(storedBooks);
        if(storedTransactions) DB.transactions = JSON.parse(storedTransactions);
        
        if(DB.users.length === 0) {
            DB.users = [
                { id: 1, username: 'admin', password: 'admin123', fullname: 'Administrator', role: 'admin', email: 'admin@lib.com' },
                { id: 2, username: 'siswa1', password: 'siswa123', fullname: 'Budi Santoso', role: 'user', email: 'budi@student.com' },
                { id: 3, username: 'siswa2', password: 'siswa123', fullname: 'Anisa Putri', role: 'user', email: 'anisa@student.com' }
            ];
        }
        if(DB.books.length === 0) {
            DB.books = [
                { id: 101, title: 'Pemrograman Web dengan PHP', author: 'Andi Maulana', stock: 5 },
                { id: 102, title: 'Database Sistem', author: 'Rahmat Fauzi', stock: 3 },
                { id: 103, title: 'UI/UX Design Principles', author: 'Clara Dewi', stock: 2 }
            ];
        }
        if(DB.transactions.length === 0) {
            DB.transactions = [
                { id: 1001, bookId: 101, userId: 2, borrowDate: '2025-04-01', returnDate: null, status: 'borrowed' },
                { id: 1002, bookId: 102, userId: 3, borrowDate: '2025-04-05', returnDate: '2025-04-10', status: 'returned' }
            ];
        }
        saveAllToLocal();
    }

    function saveAllToLocal() {
        localStorage.setItem('lib_users', JSON.stringify(DB.users));
        localStorage.setItem('lib_books', JSON.stringify(DB.books));
        localStorage.setItem('lib_transactions', JSON.stringify(DB.transactions));
    }

    function getUserById(id) { return DB.users.find(u => u.id === id); }
    function getBookById(id) { return DB.books.find(b => b.id === id); }
    
    function updateBookStock(bookId, delta) {
        const book = DB.books.find(b => b.id === bookId);
        if(book) { book.stock += delta; if(book.stock<0) book.stock=0; }
        saveAllToLocal();
    }

    function addTransaction(bookId, userId, borrowDate) {
        const newId = Date.now();
        const newTrans = { id: newId, bookId, userId, borrowDate, returnDate: null, status: 'borrowed' };
        DB.transactions.push(newTrans);
        updateBookStock(bookId, -1);
        saveAllToLocal();
        return newTrans;
    }

    function returnTransaction(transId) {
        const trans = DB.transactions.find(t => t.id === transId);
        if(trans && trans.status === 'borrowed') {
            trans.returnDate = new Date().toISOString().slice(0,10);
            trans.status = 'returned';
            updateBookStock(trans.bookId, +1);
            saveAllToLocal();
            return true;
        }
        return false;
    }

    // Fungsi untuk cek apakah buku sedang dipinjam (belum dikembalikan)
    function isBookBorrowed(bookId) {
        return DB.transactions.some(t => t.bookId === bookId && t.status === 'borrowed');
    }

    // Fungsi untuk cek apakah anggota memiliki peminjaman aktif
    function isMemberHasActiveLoan(userId) {
        return DB.transactions.some(t => t.userId === userId && t.status === 'borrowed');
    }

    let currentUser = null;
    let activeMenu = 'dashboard';
    const root = document.getElementById('appRoot');

    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = 'toast-notif';
        toast.style.background = isError ? '#dc2626' : '#10b981';
        toast.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-triangle' : 'fa-check-circle'}"></i> ${message}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // ======================== LOGIN & REGISTER ========================
    function renderLogin() {
        root.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; min-height: 90vh;">
                <div class="card" style="width: 400px; margin: auto;">
                    <h2 style="text-align:center;">📚 Perpustakaan Digital</h2>
                    <p style="text-align:center;">Login untuk melanjutkan</p>
                    <div id="loginError" style="color:red; font-size:0.8rem; margin-bottom:10px;"></div>
                    <div class="form-group"><label>Username</label><input type="text" id="loginUsername" placeholder="admin / siswa1 / siswa2"></div>
                    <div class="form-group"><label>Password</label><input type="password" id="loginPassword" placeholder="*****"></div>
                    <button id="btnLogin" class="btn-primary" style="width:100%">Masuk <i class="fas fa-sign-in-alt"></i></button>
                    <hr style="margin:20px 0">
                    <p style="text-align:center;">Belum punya akun? <a href="#" id="toRegister">Daftar sebagai Siswa</a></p>
                </div>
            </div>
        `;
        document.getElementById('btnLogin').addEventListener('click', () => {
            const username = document.getElementById('loginUsername').value.trim();
            const pwd = document.getElementById('loginPassword').value.trim();
            const user = DB.users.find(u => u.username === username && u.password === pwd);
            if(user) {
                currentUser = { ...user };
                renderApp();
            } else {
                document.getElementById('loginError').innerText = 'Username atau password salah!';
            }
        });
        document.getElementById('toRegister')?.addEventListener('click', (e) => {
            e.preventDefault();
            renderRegister();
        });
    }

    function renderRegister() {
        root.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; min-height: 90vh;">
                <div class="card" style="width: 400px;">
                    <h2>📝 Registrasi Anggota Perpustakaan</h2>
                    <div id="regError" style="color:red"></div>
                    <div class="form-group"><label>Nama Lengkap</label><input id="regFullname" placeholder="Nama Anda"></div>
                    <div class="form-group"><label>Username</label><input id="regUsername" placeholder="username unik"></div>
                    <div class="form-group"><label>Password</label><input type="password" id="regPassword" placeholder="min 4 karakter"></div>
                    <div class="form-group"><label>Email (opsional)</label><input id="regEmail" placeholder="email@contoh.com"></div>
                    <button id="doRegister" class="btn-primary" style="width:100%">Daftar</button>
                    <p style="margin-top:15px; text-align:center;">Sudah punya akun? <a href="#" id="backLogin">Login</a></p>
                </div>
            </div>
        `;
        document.getElementById('doRegister').addEventListener('click', () => {
            const fullname = document.getElementById('regFullname').value.trim();
            const username = document.getElementById('regUsername').value.trim();
            const password = document.getElementById('regPassword').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            if(!fullname || !username || !password) {
                document.getElementById('regError').innerText = 'Lengkapi semua field!';
                return;
            }
            if(DB.users.find(u => u.username === username)) {
                document.getElementById('regError').innerText = 'Username sudah terdaftar!';
                return;
            }
            const newId = DB.users.length ? Math.max(...DB.users.map(u=>u.id)) + 1 : 4;
            const newUser = { id: newId, username, password, fullname, role: 'user', email: email || '' };
            DB.users.push(newUser);
            saveAllToLocal();
            showToast('Pendaftaran berhasil! Silakan login.');
            renderLogin();
        });
        document.getElementById('backLogin').addEventListener('click', (e) => {
            e.preventDefault();
            renderLogin();
        });
    }

    // ------------------------ MAIN APP --------------------------
    function renderApp() {
        if(!currentUser) return renderLogin();
        const isAdmin = currentUser.role === 'admin';
        let menuItems = [];
        if(isAdmin) {
            menuItems = [
                { id: 'dashboard', label: '📊 Dashboard', icon: 'fas fa-tachometer-alt' },
                { id: 'books', label: '📚 Manajemen Buku', icon: 'fas fa-book' },
                { id: 'members', label: '👥 Kelola Anggota', icon: 'fas fa-users' },
                { id: 'transactions', label: '📋 CRUD Transaksi', icon: 'fas fa-exchange-alt' },
                { id: 'report', label: '🔍 Pencarian', icon: 'fas fa-search' }
            ];
        } else {
            menuItems = [
                { id: 'dashboard', label: '🏠 Beranda', icon: 'fas fa-home' },
                { id: 'borrow', label: '📖 Peminjaman Buku', icon: 'fas fa-hand-holding-heart' },
                { id: 'return', label: '🔄 Pengembalian', icon: 'fas fa-undo-alt' },
                { id: 'searchBooks', label: '🔍 Cari Buku', icon: 'fas fa-search' }
            ];
        }

        const headerHtml = `
            <div class="header">
                <div class="logo"><h1><i class="fas fa-landmark"></i> E-Library</h1><p>Sistem Peminjaman Digital</p></div>
                <div class="user-info"><i class="fas fa-user-circle"></i> ${currentUser.fullname} (${currentUser.role === 'admin' ? 'Admin' : 'Siswa'}) <button id="logoutBtn" class="btn-logout"><i class="fas fa-sign-out-alt"></i> Keluar</button></div>
            </div>
            <div class="dashboard">
                <div class="sidebar" id="sidebarMenu">
                    ${menuItems.map(item => `<div class="sidebar-item" data-menu="${item.id}"><i class="${item.icon}"></i> ${item.label}</div>`).join('')}
                </div>
                <div class="content-area" id="mainContent"></div>
            </div>
            <footer>© 2025 - Aplikasi Perpustakaan Digital | UKK RPL 2025/2026</footer>
        `;
        root.innerHTML = headerHtml;

        document.getElementById('logoutBtn').addEventListener('click', () => {
            currentUser = null;
            renderLogin();
        });

        document.querySelectorAll('.sidebar-item').forEach(el => {
            el.addEventListener('click', (e) => {
                const menuId = el.getAttribute('data-menu');
                activeMenu = menuId;
                renderContentByMenu(menuId, isAdmin);
                document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
                el.classList.add('active');
            });
        });
        const firstMenu = menuItems[0]?.id;
        renderContentByMenu(firstMenu, isAdmin);
        document.querySelector(`.sidebar-item[data-menu="${firstMenu}"]`)?.classList.add('active');
    }

    function renderContentByMenu(menuId, isAdmin) {
        const container = document.getElementById('mainContent');
        if(!container) return;
        if(isAdmin) {
            if(menuId === 'dashboard') renderAdminDashboard(container);
            else if(menuId === 'books') renderManageBooks(container);
            else if(menuId === 'members') renderManageMembers(container);
            else if(menuId === 'transactions') renderManageTransactions(container);
            else if(menuId === 'report') renderSearchPanel(container);
        } else {
            if(menuId === 'dashboard') renderUserDashboard(container);
            else if(menuId === 'borrow') renderUserBorrow(container);
            else if(menuId === 'return') renderUserReturn(container);
            else if(menuId === 'searchBooks') renderUserSearchBook(container);
        }
    }

    // ========================= ADMIN PANEL =========================
    function renderAdminDashboard(container) {
        const totalBooks = DB.books.length;
        const totalMembers = DB.users.filter(u => u.role === 'user').length;
        const activeLoans = DB.transactions.filter(t => t.status === 'borrowed').length;
        container.innerHTML = `
            <div class="card"><h2><i class="fas fa-chart-line"></i> Dashboard Admin</h2><hr>
            <div style="display:flex; gap:20px; flex-wrap:wrap; margin-top:20px;">
                <div style="background:#eef2ff; padding:1rem; border-radius:24px; flex:1"><h3>📚 Total Buku</h3><p style="font-size:2rem;">${totalBooks}</p></div>
                <div style="background:#eef2ff; padding:1rem; border-radius:24px; flex:1"><h3>👥 Anggota Aktif</h3><p style="font-size:2rem;">${totalMembers}</p></div>
                <div style="background:#eef2ff; padding:1rem; border-radius:24px; flex:1"><h3>📌 Peminjaman Aktif</h3><p style="font-size:2rem;">${activeLoans}</p></div>
            </div>
            <div class="doc-section"><i class="fas fa-file-alt"></i> <strong>Dokumentasi:</strong><br>✅ Buku tidak bisa dihapus jika sedang dipinjam.<br>✅ Anggota tidak bisa dihapus jika memiliki pinjaman aktif.<br>✅ Hapus transaksi borrowed akan mengembalikan stok.</div>
        `;
    }

    // ================== MANAJEMEN BUKU (dengan validasi hapus) ==================
    function renderManageBooks(container) {
        function refresh() {
            let searchTerm = document.getElementById('searchBookInput')?.value.toLowerCase() || '';
            let books = DB.books.filter(b => 
                b.title.toLowerCase().includes(searchTerm) || b.author.toLowerCase().includes(searchTerm)
            );
            let html = `
                <div class="flex-btns" style="margin-bottom:1rem"><button class="btn-primary" id="addBookBtn"><i class="fas fa-plus"></i> Tambah Buku</button></div>
                <div class="search-bar"><input type="text" id="searchBookInput" placeholder="Cari judul/pengarang..." value="${searchTerm}"><button id="searchBookBtn" class="btn-secondary">Cari</button></div>
                <table><thead><tr><th>ID</th><th>Judul</th><th>Pengarang</th><th>Stok</th><th>Aksi</th></tr></thead><tbody>
            `;
            books.forEach(book => {
                const isBorrowed = isBookBorrowed(book.id);
                const disableDeleteHint = isBorrowed ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : '';
                html += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.stock}</td>
                        <td class="flex-btns">
                            <button class="btn-secondary editBookBtn" data-id="${book.id}">Edit</button>
                            <button class="btn-danger deleteBookBtn" data-id="${book.id}" ${disableDeleteHint} ${isBorrowed ? 'title="Buku sedang dipinjam, tidak bisa dihapus"' : ''}>Hapus</button>
                            ${isBorrowed ? '<span class="badge" style="background:#fecaca;">sedang dipinjam</span>' : ''}
                        </td>
                    </tr>
                `;
            });
            html += `</tbody></table>`;
            container.innerHTML = html;
            document.getElementById('addBookBtn')?.addEventListener('click', () => showBookModal());
            document.querySelectorAll('.editBookBtn').forEach(btn => btn.addEventListener('click', (e) => showBookModal(parseInt(btn.dataset.id))));
            document.querySelectorAll('.deleteBookBtn').forEach(btn => {
                if(!btn.disabled) {
                    btn.addEventListener('click', (e) => {
                        const id = parseInt(btn.dataset.id);
                        if(isBookBorrowed(id)) {
                            showToast('Buku sedang dipinjam, tidak bisa dihapus!', true);
                            return;
                        }
                        if(confirm('Yakin ingin menghapus buku ini secara permanen?')) {
                            DB.books = DB.books.filter(b => b.id !== id);
                            saveAllToLocal();
                            showToast('Buku berhasil dihapus');
                            refresh();
                        }
                    });
                }
            });
            document.getElementById('searchBookBtn')?.addEventListener('click', () => refresh());
            document.getElementById('searchBookInput')?.addEventListener('keyup', (e) => { if(e.key === 'Enter') refresh(); });
        }
        refresh();

        function showBookModal(bookId = null) {
            const book = bookId ? DB.books.find(b=>b.id === bookId) : null;
            const modalHtml = `<div id="modalOverlay" class="modal" style="display:flex"><div class="modal-content"><h3>${book ? 'Edit Buku' : 'Tambah Buku'}</h3>
            <div class="form-group"><label>Judul</label><input id="modalTitle" value="${book ? book.title.replace(/"/g, '&quot;') : ''}"></div>
            <div class="form-group"><label>Pengarang</label><input id="modalAuthor" value="${book ? book.author.replace(/"/g, '&quot;') : ''}"></div>
            <div class="form-group"><label>Stok</label><input id="modalStock" type="number" value="${book ? book.stock : 1}"></div>
            <div class="flex-btns"><button id="saveBookBtn" class="btn-primary">Simpan</button><button id="closeModalBtn" class="btn-secondary">Batal</button></div></div></div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.getElementById('saveBookBtn').addEventListener('click', () => {
                const title = document.getElementById('modalTitle').value.trim();
                const author = document.getElementById('modalAuthor').value.trim();
                const stock = parseInt(document.getElementById('modalStock').value);
                if(!title || !author) return showToast('Lengkapi judul dan pengarang', true);
                if(book) {
                    book.title = title; book.author = author; book.stock = stock;
                    showToast('Buku berhasil diperbarui');
                } else {
                    const newId = DB.books.length ? Math.max(...DB.books.map(b=>b.id)) + 1 : 200;
                    DB.books.push({ id: newId, title, author, stock });
                    showToast('Buku berhasil ditambahkan');
                }
                saveAllToLocal();
                document.getElementById('modalOverlay').remove();
                refresh();
            });
            document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('modalOverlay').remove());
        }
    }

    // ================== MANAJEMEN ANGGOTA (validasi hapus jika ada pinjaman aktif) ==================
    function renderManageMembers(container) {
        function refreshMember() {
            const members = DB.users.filter(u => u.role === 'user');
            let html = `<div><button id="addMemberBtn" class="btn-primary"><i class="fas fa-user-plus"></i> Tambah Anggota</button></div>
            <table><thead><tr><th>ID</th><th>Nama Lengkap</th><th>Username</th><th>Email</th><th>Aksi</th></tr></thead><tbody>`;
            members.forEach(m => {
                const hasLoan = isMemberHasActiveLoan(m.id);
                const disableDelete = hasLoan ? 'disabled style="opacity:0.5;"' : '';
                html += `<tr>
                    <td>${m.id}</td>
                    <td>${m.fullname}</td>
                    <td>${m.username}</td>
                    <td>${m.email || '-'}</td>
                    <td>
                        <button class="editMemberBtn" data-id="${m.id}">Edit</button>
                        <button class="deleteMemberBtn" data-id="${m.id}" ${disableDelete} ${hasLoan ? 'title="Anggota masih memiliki buku pinjaman"' : ''}>Hapus</button>
                        ${hasLoan ? '<span class="badge">meminjam</span>' : ''}
                    </td>
                </tr>`;
            });
            html += `</tbody></table>`;
            container.innerHTML = html;
            document.getElementById('addMemberBtn')?.addEventListener('click', () => showMemberModal());
            document.querySelectorAll('.editMemberBtn').forEach(btn => btn.addEventListener('click', (e) => showMemberModal(parseInt(btn.dataset.id))));
            document.querySelectorAll('.deleteMemberBtn').forEach(btn => {
                if(!btn.disabled) {
                    btn.addEventListener('click', (e) => {
                        const id = parseInt(btn.dataset.id);
                        if(isMemberHasActiveLoan(id)) {
                            showToast('Anggota masih memiliki pinjaman aktif, tidak bisa dihapus!', true);
                            return;
                        }
                        if(confirm('Hapus anggota ini?')) {
                            DB.users = DB.users.filter(u => u.id !== id);
                            saveAllToLocal();
                            showToast('Anggota berhasil dihapus');
                            refreshMember();
                        }
                    });
                }
            });
        }
        function showMemberModal(memberId=null) {
            const member = memberId ? DB.users.find(u=>u.id === memberId) : null;
            const modalDiv = document.createElement('div'); modalDiv.className='modal'; modalDiv.style.display='flex';
            modalDiv.innerHTML = `<div class="modal-content"><h3>${member ? 'Edit Anggota' : 'Tambah Anggota'}</h3>
            <div class="form-group"><label>Nama Lengkap</label><input id="mFullname" value="${member ? member.fullname : ''}"></div>
            <div class="form-group"><label>Username</label><input id="mUsername" value="${member ? member.username : ''}"></div>
            <div class="form-group"><label>Password</label><input type="password" id="mPassword" placeholder="Kosongkan jika tidak diubah" value=""></div>
            <div class="form-group"><label>Email</label><input id="mEmail" value="${member ? member.email : ''}"></div>
            <div class="flex-btns"><button id="saveMemberBtn" class="btn-primary">Simpan</button><button id="cancelModalBtn" class="btn-secondary">Batal</button></div></div>`;
            document.body.appendChild(modalDiv);
            const save = () => {
                const fullname = document.getElementById('mFullname').value.trim();
                const username = document.getElementById('mUsername').value.trim();
                const pwd = document.getElementById('mPassword').value;
                const email = document.getElementById('mEmail').value;
                if(!fullname || !username) return showToast('Isi nama dan username', true);
                if(member) {
                    member.fullname = fullname; member.username = username; member.email = email;
                    if(pwd) member.password = pwd;
                    showToast('Anggota diperbarui');
                } else {
                    const newId = DB.users.length ? Math.max(...DB.users.map(u=>u.id))+1 : 10;
                    DB.users.push({ id: newId, username, password: pwd || 'siswa123', fullname, role: 'user', email });
                    showToast('Anggota ditambahkan');
                }
                saveAllToLocal();
                modalDiv.remove();
                refreshMember();
            };
            document.getElementById('saveMemberBtn').addEventListener('click', save);
            document.getElementById('cancelModalBtn').addEventListener('click', () => modalDiv.remove());
        }
        refreshMember();
    }

    // ================== MANAJEMEN TRANSAKSI (perbaikan hapus) ==================
    function renderManageTransactions(container) {
        function renderTrans() {
            let html = `<div><button id="addTransBtn" class="btn-primary">+ Transaksi Peminjaman Baru</button></div>
            <table><thead><tr><th>ID</th><th>Anggota</th><th>Buku</th><th>Tgl Pinjam</th><th>Status</th><th>Aksi</th></tr></thead><tbody>`;
            DB.transactions.forEach(t => {
                const user = getUserById(t.userId);
                const book = getBookById(t.bookId);
                html += `<tr>
                    <td>${t.id}</td>
                    <td>${user?.fullname || '?'}</td>
                    <td>${book?.title || '?'}</td>
                    <td>${t.borrowDate}</td>
                    <td><span class="badge">${t.status}</span></td>
                    <td>
                        ${t.status === 'borrowed' ? `<button class="returnTransBtn" data-id="${t.id}">Kembalikan</button>` : ''}
                        <button class="deleteTransBtn" data-id="${t.id}">Hapus</button>
                    </td>
                </tr>`;
            });
            html += `</tbody></table>`;
            container.innerHTML = html;
            document.getElementById('addTransBtn')?.addEventListener('click', showNewTransModal);
            document.querySelectorAll('.returnTransBtn').forEach(btn => btn.addEventListener('click', () => { 
                if(confirm('Kembalikan buku?')){ 
                    returnTransaction(parseInt(btn.dataset.id)); 
                    showToast('Buku berhasil dikembalikan');
                    renderTrans(); 
                } 
            }));
            document.querySelectorAll('.deleteTransBtn').forEach(btn => btn.addEventListener('click', () => { 
                if(confirm('Hapus transaksi? Tindakan ini permanen.')){ 
                    const id = parseInt(btn.dataset.id);
                    const trans = DB.transactions.find(t => t.id === id);
                    if(trans && trans.status === 'borrowed') {
                        // Kembalikan stok buku terlebih dahulu
                        updateBookStock(trans.bookId, +1);
                    }
                    DB.transactions = DB.transactions.filter(tx => tx.id !== id);
                    saveAllToLocal();
                    showToast('Transaksi dihapus');
                    renderTrans();
                } 
            }));
        }
        function showNewTransModal() {
            const members = DB.users.filter(u=>u.role==='user');
            const books = DB.books.filter(b=>b.stock>0);
            let modalDiv = document.createElement('div'); modalDiv.className='modal'; modalDiv.style.display='flex';
            modalDiv.innerHTML = `<div class="modal-content"><h3>Peminjaman Baru</h3>
            <div class="form-group"><label>Anggota</label><select id="transUserId">${members.map(m=>`<option value="${m.id}">${m.fullname}</option>`).join('')}</select></div>
            <div class="form-group"><label>Buku (stok tersedia)</label><select id="transBookId">${books.map(b=>`<option value="${b.id}">${b.title} (stok:${b.stock})</option>`).join('')}</select></div>
            <div class="form-group"><label>Tgl Pinjam</label><input type="date" id="transDate" value="${new Date().toISOString().slice(0,10)}"></div>
            <div class="flex-btns"><button id="confirmTransBtn" class="btn-primary">Pinjamkan</button><button id="cancelTransBtn" class="btn-secondary">Batal</button></div></div>`;
            document.body.appendChild(modalDiv);
            document.getElementById('confirmTransBtn').addEventListener('click', () => {
                const userId = parseInt(document.getElementById('transUserId').value);
                const bookId = parseInt(document.getElementById('transBookId').value);
                const date = document.getElementById('transDate').value;
                const book = getBookById(bookId);
                if(book.stock <=0) { showToast('Stok habis!', true); return; }
                addTransaction(bookId, userId, date);
                showToast('Peminjaman berhasil');
                modalDiv.remove();
                renderTrans();
            });
            document.getElementById('cancelTransBtn').addEventListener('click', () => modalDiv.remove());
        }
        renderTrans();
    }

    function renderSearchPanel(container) {
        container.innerHTML = `<div class="card"><h2>Pencarian (Buku / Anggota / Transaksi)</h2>
        <input type="text" id="globalSearch" placeholder="Kata kunci...">
        <div id="searchResult"></div></div>`;
        const input = document.getElementById('globalSearch');
        const resultDiv = document.getElementById('searchResult');
        input.addEventListener('input', () => {
            const kw = input.value.toLowerCase();
            if(!kw) { resultDiv.innerHTML=''; return; }
            let bukuMatch = DB.books.filter(b=>b.title.toLowerCase().includes(kw)||b.author.toLowerCase().includes(kw));
            let anggotaMatch = DB.users.filter(u=>u.fullname.toLowerCase().includes(kw)&&u.role==='user');
            let transaksi = DB.transactions.filter(t=> {
                const user = getUserById(t.userId);
                const book = getBookById(t.bookId);
                return user?.fullname.toLowerCase().includes(kw) || book?.title.toLowerCase().includes(kw);
            });
            resultDiv.innerHTML = `<h4>Buku:</h4>${bukuMatch.map(b=>`📖 ${b.title} - ${b.author}`).join('<br>')||'-'}<hr><h4>Anggota:</h4>${anggotaMatch.map(a=>`👤 ${a.fullname}`).join('<br>')||'-'}<hr><h4>Transaksi:</h4>${transaksi.map(t=>`🔄 ${getUserById(t.userId)?.fullname} meminjam ${getBookById(t.bookId)?.title}`).join('<br>')||'-'}`;
        });
    }

    // USER SECTION (sama seperti sebelumnya)
    function renderUserDashboard(container) { container.innerHTML = `<div class="card"><h2>Selamat Datang, ${currentUser.fullname}</h2><p>Gunakan menu untuk meminjam/mengembalikan buku perpustakaan.</p><div class="doc-section"><i class="fas fa-info-circle"></i> Petunjuk: Pilih 'Peminjaman Buku' untuk pinjam, 'Pengembalian' untuk mengembalikan buku yang sedang dipinjam.</div></div>`; }
    function renderUserBorrow(container) {
        let bookList = DB.books.filter(b=>b.stock>0);
        let html = `<h3>📖 Daftar Buku Tersedia</h3><div id="borrowMsg"></div><div class="search-bar"><input id="searchBorrow" placeholder="Cari buku..."><button id="searchBtnBorrow" class="btn-primary">Cari</button></div><div id="bookGrid"></div>`;
        container.innerHTML = html;
        function renderBooks(filter='') {
            let books = DB.books.filter(b=>b.stock>0);
            if(filter) books = books.filter(b=>b.title.toLowerCase().includes(filter)||b.author.toLowerCase().includes(filter));
            let grid = `<div style="display:grid;gap:1rem;">`+books.map(b=>`<div class="card" style="display:flex;justify-content:space-between;"><div><b>${b.title}</b><br>Penulis: ${b.author}<br>Stok: ${b.stock}</div><button class="btn-primary borrowAction" data-id="${b.id}">Pinjam</button></div>`).join('')+`</div>`;
            document.getElementById('bookGrid').innerHTML = grid;
            document.querySelectorAll('.borrowAction').forEach(btn => btn.addEventListener('click', () => {
                const bookId = parseInt(btn.dataset.id);
                const book = getBookById(bookId);
                if(book.stock<=0) showToast('Stok habis!', true);
                else { addTransaction(bookId, currentUser.id, new Date().toISOString().slice(0,10)); showToast(`Buku "${book.title}" berhasil dipinjam!`); renderUserBorrow(container); }
            }));
        }
        renderBooks();
        document.getElementById('searchBtnBorrow')?.addEventListener('click', () => renderBooks(document.getElementById('searchBorrow').value.toLowerCase()));
        document.getElementById('searchBorrow')?.addEventListener('keyup', (e) => { if(e.key==='Enter') renderBooks(e.target.value.toLowerCase()); });
    }
    function renderUserReturn(container) {
        const userLoans = DB.transactions.filter(t => t.userId === currentUser.id && t.status === 'borrowed');
        let html = `<h3>Buku yang sedang dipinjam</h3><div id="returnList">`;
        if(userLoans.length===0) html+=`<p>Tidak ada peminjaman aktif.</p>`;
        else userLoans.forEach(loan => { const book = getBookById(loan.bookId); html+=`<div class="card" style="display:flex; justify-content:space-between;"><div><b>${book?.title}</b><br>Dipinjam: ${loan.borrowDate}</div><button class="btn-primary returnAct" data-id="${loan.id}">Kembalikan</button></div>`; });
        html+=`</div>`;
        container.innerHTML = html;
        document.querySelectorAll('.returnAct').forEach(btn => btn.addEventListener('click', (e) => { const id = parseInt(btn.dataset.id); if(confirm('Kembalikan buku?')) { returnTransaction(id); showToast('Buku dikembalikan'); renderUserReturn(container); } }));
    }
    function renderUserSearchBook(container) {
        container.innerHTML = `<div class="card"><h3>Cari Koleksi Buku</h3><input id="searchUserBook" placeholder="Judul atau pengarang"><button id="searchBookUserBtn" class="btn-primary">Cari</button><div id="userSearchResult"></div></div>`;
        document.getElementById('searchBookUserBtn').addEventListener('click', () => {
            const kw = document.getElementById('searchUserBook').value.toLowerCase();
            const filtered = DB.books.filter(b=>b.title.toLowerCase().includes(kw)||b.author.toLowerCase().includes(kw));
            document.getElementById('userSearchResult').innerHTML = filtered.map(b=>`<div class="card">📘 ${b.title} - ${b.author} (Stok: ${b.stock})</div>`).join('')||'<p>Tidak ditemukan</p>';
        });
    }

    // Start aplikasi
    initDatabase();
    renderLogin();
</script>
</body>
</html>