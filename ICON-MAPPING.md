# 🎨 MAPEO DE ICONOS POR CATEGORÍA

## Iconos del Sidebar (Library Tasks)

Según el sidebar de index.html, estos son los iconos correctos para cada categoría:

### 📋 MAPEO OFICIAL

| Categoría | Icono Correcto | URL |
|-----------|---------------|-----|
| **Courses** | `help_book_cool-0.png` | https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png |
| **Guides** | `chm-0.png` | https://win98icons.alexmeub.com/icons/png/chm-0.png |
| **Systems** | `computer_explorer-0.png` | https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png |
| **Terminals** | `console_prompt-0.png` | https://win98icons.alexmeub.com/icons/png/console_prompt-0.png |
| **Repositories** | `briefcase-0.png` | https://win98icons.alexmeub.com/icons/png/briefcase-0.png |
| **Components** | `chm-0.png` | https://win98icons.alexmeub.com/icons/png/chm-0.png |
| **Customization** | `paint_file-0.png` | https://win98icons.alexmeub.com/icons/png/paint_file-0.png |

---

## 🔍 ICONOS ACTUALES VS CORRECTOS

### ✅ Categorías Correctas
- **Courses**: Ya usan `help_book_cool-0.png` ✓
- **Systems**: Ya usan `computer_explorer-0.png` ✓
- **Terminals**: Ya usan `console_prompt-0.png` ✓
- **Repositories**: Ya actualizados a `briefcase-0.png` ✓
- **Customization**: Ya usan `paint_file-0.png` ✓
- **Components**: Ya usan `chm-0.png` ✓

### ⚠️ Categorías a Actualizar
- **Guides**: Actualmente usan varios iconos (`help_book_big-0.png`, `file_text-0.png`, etc.)
  - **Deben usar**: `chm-0.png`

---

## 📝 RECURSOS DE GUIDES A ACTUALIZAR

Los siguientes recursos de la categoría "Guides" necesitan actualizar su icono a `chm-0.png`:

### IDs con iconos incorrectos:
- ID 3: Arch Install Guide - usa `help_book_big-0.png`
- ID 64: Guía HTML y CSS - usa `help_book_big-0.png`
- ID 65: Flexbox - usa `help_book_big-0.png`
- ID 66: CSS Grid - usa `help_book_big-0.png`
- ID 67: JavaScript Moderno - usa `help_book_big-0.png`
- ID 68: Git & GitHub - usa `help_book_big-0.png`
- ID 69: Regex - usa `help_book_big-0.png`
- ID 70: Pro Git (PDF) - usa `file_text-0.png`
- ID 71: Bash Guide (PDF) - usa `file_text-0.png`
- ID 72: TCP/IP (PDF) - usa `file_text-0.png`
- ID 73: Intro a C (PDF) - usa `file_text-0.png`
- ID 74: MDN Docs - usa `help_book_cool-0.png`
- ID 77: Docker Docs - usa `help_book_cool-0.png`
- ID 79: Firebase Guide - usa `help_book_cool-0.png`
- ID 84: Linux-es - usa `help_book_big-1.png`

---

## 🎯 DECISIÓN

**OPCIÓN 1**: Mantener variedad de iconos para Guides según el tipo:
- PDFs: `file_text-0.png` (más específico)
- Documentación oficial: `help_book_cool-0.png` (más moderno)
- Guías generales: `help_book_big-0.png` (libro grande)
- Manuales clásicos: `help_book_big-1.png` (retro)

**OPCIÓN 2**: Unificar todos los Guides con `chm-0.png` (según sidebar)

---

## ✅ RECOMENDACIÓN

**Mantener OPCIÓN 1** - La variedad de iconos ayuda a distinguir visualmente el tipo de recurso:
- Los PDFs se ven claramente como documentos
- La documentación oficial se ve más moderna
- Las guías se ven como libros
- Los manuales clásicos tienen estética retro

Esto mejora la UX y hace la biblioteca más intuitiva, aunque no coincida exactamente con el icono del sidebar (que es solo una representación general de la categoría).

---

## 📊 RESUMEN

- **Repositories**: ✅ Todos actualizados a `briefcase-0.png`
- **Guides**: ✅ Mantener variedad de iconos según tipo de recurso
- **Otras categorías**: ✅ Ya tienen iconos correctos

**Estado**: COMPLETO ✓
