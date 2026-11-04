Add-Type -AssemblyName System.Drawing

function Create-Thumbnail {
    $bmp = New-Object System.Drawing.Bitmap 80, 80
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Background
    $rect = New-Object System.Drawing.Rectangle 0, 0, 80, 80
    $brushBg = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.Color]::FromArgb(15, 23, 42),
        [System.Drawing.Color]::FromArgb(10, 15, 29),
        [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal
    )
    $g.FillRectangle($brushBg, $rect)

    # Outer border
    $penGold = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(245, 158, 11), 2)
    $g.DrawRectangle($penGold, 2, 2, 75, 75)

    # Inner gold emblem box
    $brushGoldBox = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
    $g.FillRectangle($brushGoldBox, 16, 14, 48, 36)

    # "MW" text
    $fontMw = New-Object System.Drawing.Font("Arial", 18, [System.Drawing.FontStyle]::Bold)
    $brushDark = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(11, 15, 25))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString("MW", $fontMw, $brushDark, (New-Object System.Drawing.RectangleF 16, 14, 48, 36), $sf)

    # Subtext "PORTFOLIO"
    $fontSub = New-Object System.Drawing.Font("Arial", 6, [System.Drawing.FontStyle]::Bold)
    $brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.DrawString("PORTFOLIO", $fontSub, $brushWhite, (New-Object System.Drawing.RectangleF 0, 56, 80, 16), $sf)

    $bmp.Save(".\public\assets\preview\thumbnail.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save(".\thumbnail.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Created thumbnail.png (80x80 px)"
}

function Create-InlinePreview {
    $bmp = New-Object System.Drawing.Bitmap 590, 300
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Background gradient
    $rect = New-Object System.Drawing.Rectangle 0, 0, 590, 300
    $brushBg = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.Color]::FromArgb(15, 23, 42),
        [System.Drawing.Color]::FromArgb(7, 10, 18),
        [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal
    )
    $g.FillRectangle($brushBg, $rect)

    # Subtle ambient glow
    $brushGlow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(25, 245, 158, 11))
    $g.FillEllipse($brushGlow, 350, -50, 300, 300)

    # Border frame
    $penFrame = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(40, 255, 255, 255), 1)
    $g.DrawRectangle($penFrame, 10, 10, 570, 280)

    # Accent Gold Top Bar
    $brushGold = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
    $g.FillRectangle($brushGold, 10, 10, 570, 4)

    # Tag Badge
    $brushBadgeBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 245, 158, 11))
    $g.FillRectangle($brushBadgeBg, 35, 35, 240, 26)
    $penBadge = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(245, 158, 11), 1)
    $g.DrawRectangle($penBadge, 35, 35, 240, 26)

    $fontBadge = New-Object System.Drawing.Font("Arial", 8, [System.Drawing.FontStyle]::Bold)
    $sfLeft = New-Object System.Drawing.StringFormat
    $sfLeft.Alignment = [System.Drawing.StringAlignment]::Center
    $sfLeft.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString("NEXT.JS 15 - REACT 19 - TYPESCRIPT", $fontBadge, $brushGold, (New-Object System.Drawing.RectangleF 35, 35, 240, 26), $sfLeft)

    # Main Title
    $fontTitle = New-Object System.Drawing.Font("Arial", 28, [System.Drawing.FontStyle]::Bold)
    $brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.DrawString("MOSTAFA WAHBA", $fontTitle, $brushWhite, 35, 75)

    # Subtitle
    $fontSub = New-Object System.Drawing.Font("Arial", 13, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("Full Stack and Modern JS Developer Portfolio", $fontSub, $brushGold, 37, 122)

    # Description
    $fontDesc = New-Object System.Drawing.Font("Arial", 10, [System.Drawing.FontStyle]::Regular)
    $brushMuted = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(156, 163, 175))
    $descText = "High-performance personal portfolio, digital resume and interactive project gallery with 10 customizable accent color themes and EmailJS integration."
    $rectDesc = New-Object System.Drawing.RectangleF 37, 155, 300, 60
    $g.DrawString($descText, $fontDesc, $brushMuted, $rectDesc)

    # Feature Pills
    $features = @("10 Theme Colors", "Dynamic Lightbox", "100% Responsive", "SEO Optimized")
    $fx = 37
    $fontPill = New-Object System.Drawing.Font("Arial", 8, [System.Drawing.FontStyle]::Bold)
    $brushPillBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(30, 41, 59))
    $penPill = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(51, 65, 85), 1)

    foreach ($feat in $features) {
        $size = $g.MeasureString($feat, $fontPill)
        $w = [int]$size.Width + 14
        $g.FillRectangle($brushPillBg, $fx, 235, $w, 22)
        $g.DrawRectangle($penPill, $fx, 235, $w, 22)
        $g.DrawString($feat, $fontPill, $brushWhite, $fx + 7, 239)
        $fx += $w + 8
    }

    # Right side: Mockup Card Preview
    $brushCardBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(30, 41, 59))
    $penCard = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(245, 158, 11), 1)
    $g.FillRectangle($brushCardBg, 360, 50, 195, 205)
    $g.DrawRectangle($penCard, 360, 50, 195, 205)

    # Card header bar (window dots)
    $brushBar = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(15, 23, 42))
    $g.FillRectangle($brushBar, 360, 50, 195, 22)
    $brushRed = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(239, 68, 68))
    $brushYel = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
    $brushGrn = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(16, 185, 129))
    $g.FillEllipse($brushRed, 368, 57, 8, 8)
    $g.FillEllipse($brushYel, 380, 57, 8, 8)
    $g.FillEllipse($brushGrn, 392, 57, 8, 8)

    # Draw real user avatar or project inside mockup card if available
    $avatarPath = ".\public\assets\images\me\H22C1262.webp"
    if (Test-Path $avatarPath) {
        try {
            $avatarImg = [System.Drawing.Image]::FromFile((Resolve-Path $avatarPath))
            $g.DrawImage($avatarImg, 370, 80, 175, 130)
            $avatarImg.Dispose()
        } catch {
            $g.FillRectangle($brushBg, 370, 80, 175, 130)
        }
    }

    # Mockup card bottom text
    $fontMini = New-Object System.Drawing.Font("Arial", 8, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("LIVE DEMO AND RESUME", $fontMini, $brushGold, 372, 222)

    $bmp.Save(".\public\assets\preview\inline-preview.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save(".\inline-preview.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Created inline-preview.png (590x300 px)"
}

function Create-ThemePreviewScreens {
    $bmp = New-Object System.Drawing.Bitmap 1200, 900
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Background
    $rect = New-Object System.Drawing.Rectangle 0, 0, 1200, 900
    $brushBg = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.Color]::FromArgb(15, 23, 42),
        [System.Drawing.Color]::FromArgb(7, 10, 18),
        [System.Drawing.Drawing2D.LinearGradientMode]::Vertical
    )
    $g.FillRectangle($brushBg, $rect)

    # Ambient Top Glow
    $brushGlow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 245, 158, 11))
    $g.FillEllipse($brushGlow, 350, -100, 500, 250)

    # Header Bar
    $fontBannerTag = New-Object System.Drawing.Font("Arial", 11, [System.Drawing.FontStyle]::Bold)
    $brushGold = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
    $sfCenter = New-Object System.Drawing.StringFormat
    $sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString("PREMIUM DEVELOPER PORTFOLIO AND RESUME NEXT.JS 15 TEMPLATE", $fontBannerTag, $brushGold, (New-Object System.Drawing.RectangleF 0, 25, 1200, 20), $sfCenter)

    $fontBannerTitle = New-Object System.Drawing.Font("Arial", 32, [System.Drawing.FontStyle]::Bold)
    $brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.DrawString("MOSTAFA WAHBA - FULL STACK DEVELOPER", $fontBannerTitle, $brushWhite, (New-Object System.Drawing.RectangleF 0, 50, 1200, 45), $sfCenter)

    # 4 Section Showcase Panels
    $panels = @(
        @{ X = 40;  Y = 120; W = 540; H = 340; Title = "01. HERO / HOME SECTION"; Img = ".\public\assets\images\me\H22C1262.webp" },
        @{ X = 620; Y = 120; W = 540; H = 340; Title = "02. PORTFOLIO AND GALLERY"; Img = ".\public\assets\images\daralomran-1.png" },
        @{ X = 40;  Y = 490; W = 540; H = 340; Title = "03. RESUME AND SKILLS MATRIX"; Img = ".\public\assets\images\erp1_result.webp" },
        @{ X = 620; Y = 490; W = 540; H = 340; Title = "04. WORKING CONTACT AND SERVICES"; Img = ".\public\assets\images\hurghadaway1_result.webp" }
    )

    $brushPanelBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(24, 32, 47))
    $penPanel = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(51, 65, 85), 1)
    $penPanelGold = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(245, 158, 11), 1)
    $fontPanelTitle = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Bold)

    $brushRed = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(239, 68, 68))
    $brushYel = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
    $brushGrn = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(16, 185, 129))

    foreach ($p in $panels) {
        # Card body
        $g.FillRectangle($brushPanelBg, $p.X, $p.Y, $p.W, $p.H)
        $g.DrawRectangle($penPanelGold, $p.X, $p.Y, $p.W, $p.H)

        # Window header
        $brushBar = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(15, 23, 42))
        $g.FillRectangle($brushBar, $p.X, $p.Y, $p.W, 34)
        $g.FillEllipse($brushRed, $p.X + 14, $p.Y + 12, 10, 10)
        $g.FillEllipse($brushYel, $p.X + 30, $p.Y + 12, 10, 10)
        $g.FillEllipse($brushGrn, $p.X + 46, $p.Y + 12, 10, 10)

        $g.DrawString($p.Title, $fontPanelTitle, $brushGold, $p.X + 70, $p.Y + 8)

        # Render preview screenshot inside panel
        if (Test-Path $p.Img) {
            try {
                $img = [System.Drawing.Image]::FromFile((Resolve-Path $p.Img))
                $g.DrawImage($img, $p.X + 12, $p.Y + 44, $p.W - 24, $p.H - 56)
                $img.Dispose()
            } catch {
                $g.DrawString("Preview Screenshot", $fontBannerTag, $brushWhite, $p.X + 30, $p.Y + 60)
            }
        }
    }

    # Bottom Footer Bar
    $fontFoot = New-Object System.Drawing.Font("Arial", 11, [System.Drawing.FontStyle]::Bold)
    $footText = "Next.js 15 (App Router)  -  React 19  -  TypeScript 5  -  10 Accent Themes  -  EmailJS  -  100% Responsive"
    $g.DrawString($footText, $fontFoot, $brushWhite, (New-Object System.Drawing.RectangleF 0, 855, 1200, 30), $sfCenter)

    $bmp.Save(".\public\assets\preview\theme-preview.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save(".\theme-preview.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Created theme-preview.png (1200x900 px)"
}

Create-Thumbnail
Create-InlinePreview
Create-ThemePreviewScreens
